// src/views/UserList.js
import m from 'mithril';
import User from '../models/User';

export default {
  oninit: User.loadList,
  view() {
    return (
      <div class="user-list">
      {
        User.list.map(
          user => (
            <a
              key={user.id}
              class="user-list-item"
              href={`/edit/${user.id}`}
              oncreate={m.route.link}
            >
              {user.firstName} {user.lastName}
            </a>
          )
        )
      }
      </div>
    );
  },
};
