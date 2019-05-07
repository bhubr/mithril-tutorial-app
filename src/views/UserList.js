// src/views/UserList.js
import m from 'mithril';
import User from '../models/User';

export default {
  oninit: User.loadList,
  view() {
    return m('.user-list', User.list.map(user => m('.user-list-item', `${user.firstName} ${user.lastName}`)));
  },
};
