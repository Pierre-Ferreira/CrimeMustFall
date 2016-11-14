import React from 'react';
import NavBarMain from './navbar_main.jsx'
import HomePage from './home_page.jsx'
import AuthWrapper from '../containers/auth_wrapper'
import { Col } from 'react-bootstrap'

const MainLayout = ({content = () => null}) => (
  <Col sm={8} smOffset={2} style = {{backgroundColor: '#8cb6c1'}}>
    <div>
      <AuthWrapper>
        <div><NavBarMain /></div>
        <div>{content()}</div>
      </AuthWrapper>
    </div>
  </Col>
);

export default MainLayout;
