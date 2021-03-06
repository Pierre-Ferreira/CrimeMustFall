import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import PublicPage from './components/public_page.jsx';
import Homepage from './components/home_page.jsx';
import NotFound404 from './components/not_found_404.jsx'
// import Settings from './containers/settings'
import SettingsUserInfo from './containers/settings_user_info'
import EmergencyContactsSearch from './containers/emergency_contacts_search.js'
import MyContactList from './containers/my_contact_list.js'
import ContactsRequestedByMeList from './containers/contacts_requested_by_me_list.js'
import ContactsRequestsToMeList from './containers/contacts_requests_to_me_list.js'
import ChatMainPage from './containers/chat_main_page.js'
import ChatPage from './containers/chat_page.js'
import Login from '../users/containers/login.js'
import Register from '../users/containers/new_user.js'


export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);


  FlowRouter.route('/login', {
    name: 'login_page',
    action() {
      // if (Meteor.userId())
      //   FlowRouter.go('home')
      // else {
        mount(MainLayoutCtx, {
          content: () => (<Login />)
        });
      // }
    }
  });
  FlowRouter.route('/register', {
    name: 'register_page',
    action() {
      // if (Meteor.userId())
      //   FlowRouter.go('home')
      // else {
        mount(MainLayoutCtx, {
          content: () => (<Register />)
        });
      // }
    }
  });
  FlowRouter.route('/', {
    name: 'public_page',
    action() {
      // if (Meteor.userId())
      //   FlowRouter.go('home')
      // else
        FlowRouter.go('login_page')
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
  FlowRouter.route('/chats_main_page', {
    name: 'chatsmainpage',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<ChatMainPage />)
      });
    }
  });
  FlowRouter.route('/chat_page/:chat_id', {
    name: 'chatpage',
    action({chat_id}) {
      mount(MainLayoutCtx, {
        content: () => (<ChatPage chat_id={chat_id}/>)
      });
    }
  });
  FlowRouter.notFound = {
    // Subscriptions registered here don't have Fast Render support.
    subscriptions: function() {

    },
    action: function() {
      mount(MainLayoutCtx, {
        content: () => (<NotFound404 />)
      });
    }
};
}
