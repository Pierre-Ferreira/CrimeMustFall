import React from 'react';
import PublicPage from './public_page.jsx'
import NavbarPublic from './navbar_public.jsx'

const AuthWrapper = (infoObj) => {
  let {loggedIn, loggingIn, children, context, isNotAuthenticated} = infoObj
  const {Meteor, FlowRouter, LocalState} = context();
  console.log('infoObj:',infoObj, context())
  if (loggedIn) {
    LocalState.set('SHOW_USER_SETTINGS_MODAL',isNotAuthenticated)
console.log("LocalState.get('NOT_JUST_LOGGED_IN'):",LocalState.get('NOT_JUST_LOGGED_IN'))
    if (!LocalState.get('NOT_JUST_LOGGED_IN')) {
        FlowRouter.go('/home')
        LocalState.set('NOT_JUST_LOGGED_IN', true)
    } else {
        LocalState.set('NOT_JUST_LOGGED_IN', true)
    }
    return (
      <div>{children}</div>
    );
  }

  if (loggingIn) {
    return (
      <div>Loading</div>
    );
  }

  return (
    <div>
      <NavbarPublic />
      <div>
        <PublicPage />
      </div>
    </div>
  );
}

export default AuthWrapper;
