import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import PublicPage from './components/public_page.jsx';
import Homepage from './components/home_page.jsx';
// import Settings from './containers/settings'
import SettingsUserInfo from './containers/settings_user_info'
import EmergencyContactsSearch from './containers/emergency_contacts_search.js'
import MyContactList from './containers/my_contact_list.js'
import ContactsRequestedByMeList from './containers/contacts_requested_by_me_list.js'
import ContactsRequestsToMeList from './containers/contacts_requests_to_me_list.js'

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
  FlowRouter.route('/my_settings', {
    name: 'mysettings',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<SettingsUserInfo />)
      });
    }
  });
  FlowRouter.route('/contacts_search', {
    name: 'contactssearch',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<EmergencyContactsSearch />)
      });
    }
  });
  FlowRouter.route('/my_contacts', {
    name: 'mycontacts',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<MyContactList />)
      });
    }
  });
  FlowRouter.route('/requested_by_me', {
    name: 'requestedbyme',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<ContactsRequestedByMeList />)
      });
    }
  });
  FlowRouter.route('/requests_to_me', {
    name: 'requeststome',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<ContactsRequestsToMeList />)
      });
    }
  });
}
