import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ChatMessagesDisplay from '../chat_messages_display.jsx';

storiesOf('core.ChatMessagesDisplay', module)
  .add('default view', () => {
    return (
      <ChatMessagesDisplay />
    );
  })
