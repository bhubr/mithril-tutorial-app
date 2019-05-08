// eslint-disable-next-line no-unused-vars
import m from 'mithril';
import User from '../models/User';

export default {
  oninit(vnode) { User.load(vnode.attrs.id); },
  handleSubmit(e) {
    e.preventDefault();
    User.save();
  },
  handleChange(e) {
    const { target: { name: key, value } } = e;
    User.current[key] = value;
  },
  view() {
    return (
      <form onsubmit={this.handleSubmit}>
        <label class="label">First name</label>
        <input
          class="input"
          type="text"
          name="firstName"
          placeholder="First name"
          oninput={this.handleChange}
          value={User.current.firstName}
        />
        <label class="label">Last name</label>
        <input
          class="input"
          type="text"
          name="lastName"
          placeholder="Last name"
          oninput={this.handleChange}
          value={User.current.lastName}
        />

        <button class="button" type="submit">Save</button>

      </form>
    );
  }
};
