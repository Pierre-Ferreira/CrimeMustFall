import React from 'react';
import NavBarMain from './navbar_main.jsx'
import HomePage from './home_page.jsx'
import AuthWrapper from '../containers/auth_wrapper'

const MainLayout = ({content = () => null}) => (
  <div style = {{backgroundColor: '#8cb6c1'}}>
    <AuthWrapper>
      <div><NavBarMain /></div>
      <div>{content()}</div>
    </AuthWrapper>
  </div>
);

export default MainLayout;
