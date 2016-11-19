import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import NotFound404 from '../not_found_404.jsx';

storiesOf('core.NotFound404', module)
  .add('default view', () => {
    return (
      <NotFound404 />
    );
  })
