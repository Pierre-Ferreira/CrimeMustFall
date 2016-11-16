import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ChatInputField from '../chat_input_field.jsx';

storiesOf('core.ChatInputField', module)
  .add('default view', () => {
    return (
      <ChatInputField />
    );
  })
