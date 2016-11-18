import React from 'react';
import NavBarMain from './navbar_main.jsx'
import HomePage from './home_page.jsx'
import AuthWrapper from '../containers/auth_wrapper'
import { Col } from 'react-bootstrap'

const MainLayout = ({content = () => null}) => (
  <Col sm={6} smOffset={3} className="mainLayout">
    <div>
      <AuthWrapper>
        <div><NavBarMain /></div>
        <div>{content()}</div>
      </AuthWrapper>
    </div>
  </Col>
);

export default MainLayout;
