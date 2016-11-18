import React from 'react';
import PublicPage from './public_page.jsx'
import NavbarPublic from './navbar_public.jsx'

const AuthWrapper = (infoObj) => {
  let {loggedIn, loggingIn, children, context, isAuthenticated} = infoObj
  const {Meteor, FlowRouter, LocalState} = context();
  console.log('infoObj:',infoObj, context())
  if (loggedIn) {
    LocalState.set('SHOW_USER_SETTINGS_MODAL',isAuthenticated?false:true)
    FlowRouter.go('/home')
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
