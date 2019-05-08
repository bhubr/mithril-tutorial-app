// src/views/Layout.js
import m from 'mithril';

export default {
  view(vnode) {
    return (
      <main class="layout">
        <nav class="menu">
          <a href="/list" oncreate={m.route.link}>Users</a>
        </nav>
        <section>{vnode.children}</section>
      </main>
    );
  }
};
