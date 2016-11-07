import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import SettingsUserInfo from '../settings_user_info.jsx';

storiesOf('core.SettingsUserInfo', module)
  .add('default view', () => {
    return (
      <SettingsUserInfo />
    );
  })
