import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Homepage from './components/homepage.jsx';
// import Settings from './containers/settings'
import SettingsUserInfo from './containers/settings_user_info'


export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/home', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Homepage />)
      });
    }
  });
  FlowRouter.route('/mysettings', {
    name: 'mysettings',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<SettingsUserInfo />)
      });
    }
  });
}
