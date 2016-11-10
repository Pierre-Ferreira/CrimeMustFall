import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import PublicPage from './components/public_page.jsx';
import Homepage from './components/home_page.jsx';
// import Settings from './containers/settings'
import SettingsUserInfo from './containers/settings_user_info'
import EmergencyContactsSearch from './containers/emergency_contacts_search.js'

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'public_page',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<PublicPage />)
      });
    }
  });
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
  FlowRouter.route('/contactssearch', {
    name: 'contactssearch',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<EmergencyContactsSearch />)
      });
    }
  });
}
