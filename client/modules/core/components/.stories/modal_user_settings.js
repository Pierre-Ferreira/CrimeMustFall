import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ModalUserSettings from '../modal_user_settings.jsx';

storiesOf('core.ModalUserSettings', module)
  .add('default view', () => {
    return (
      <ModalUserSettings />
    );
  })
