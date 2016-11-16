import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ChatPage from '../chat_page.jsx';

storiesOf('core.ChatPage', module)
  .add('default view', () => {
    return (
      <ChatPage />
    );
  })
