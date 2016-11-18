import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ChatAutoMessage from '../chat_auto_message.jsx';

storiesOf('core.ChatAutoMessage', module)
  .add('default view', () => {
    return (
      <ChatAutoMessage />
    );
  })
