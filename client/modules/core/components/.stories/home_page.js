import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Homepage from '../home_page.jsx';

storiesOf('core.Homepage', module)
  .add('default view', () => {
    return (
      <Homepage />
    );
  })
