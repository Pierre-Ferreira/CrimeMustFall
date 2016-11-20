import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import MyChatsAlertedButton from '../my_chats_alerted_button.jsx';

storiesOf('core.MyChatsAlertedButton', module)
  .add('default view', () => {
    return (
      <MyChatsAlertedButton />
    );
  })
