import React from 'react';
import NavbarMain from './navbar_main.jsx'
const Layout = ({content = () => null }) => (
  <div>
    <NavbarMain />
    <div>
      {content()}
    </div>
  </div>
);

export default Layout;
