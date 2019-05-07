import m from 'mithril';
import UserList from './views/UserList';

m.route.prefix('');
m.route(document.body, '/list', {
  '/list': UserList,
});
