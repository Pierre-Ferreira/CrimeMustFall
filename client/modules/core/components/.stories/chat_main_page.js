import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ChatMainPage from '../chat_main_page.jsx';

storiesOf('core.ChatMainPage', module)
  .add('default view', () => {
    return (
      <ChatMainPage />
    );
  })
