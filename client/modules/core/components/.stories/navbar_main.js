import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Navbar from '../navbar.jsx';

storiesOf('core.Navbar', module)
  .add('default view', () => {
    return (
      <Navbar />
    );
  })
