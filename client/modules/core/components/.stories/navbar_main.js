import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import NavbarMain from '../navbar_main.jsx';

storiesOf('core.NavbarMain', module)
  .add('default view', () => {
    return (
      <NavbarMain />
    );
  })
