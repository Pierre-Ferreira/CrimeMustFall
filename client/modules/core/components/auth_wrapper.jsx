import React from 'react';
import PublicPage from './public_page.jsx'
import NavbarPublic from './navbar_public.jsx'

const AuthWrapper = ({loggedIn, loggingIn, children}) => {
  if (loggedIn) {
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
