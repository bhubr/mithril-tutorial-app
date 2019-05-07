// src/models/User.js
import m from 'mithril';

const User = {
  list: [],
  loadList() {
    return m.request({
      method: 'GET',
      url: 'https://rem-rest-api.herokuapp.com/api/users',
      withCredentials: true,
    })
      .then((result) => {
        User.list = result.data;
      });
  },
};

export default User;
