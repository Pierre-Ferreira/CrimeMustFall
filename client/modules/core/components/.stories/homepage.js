import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Homepage from '../homepage.jsx';

storiesOf('core.Homepage', module)
  .add('default view', () => {
    return (
      <Homepage />
    );
  })
