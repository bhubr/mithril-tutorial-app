import m from 'mithril';
import UserList from './views/UserList';
import UserForm from './views/UserForm';

// remove hashbang (later)
// m.route.prefix('');

m.route(document.body, '/list', {
  '/list': UserList,
  '/edit/:id': UserForm,
});
