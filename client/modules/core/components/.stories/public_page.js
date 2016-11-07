import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import PublicPage from '../public_page.jsx';

storiesOf('core.PublicPage', module)
  .add('default view', () => {
    return (
      <PublicPage />
    );
  })
