import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ChatInputField from '../components/chat_input_field.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  chatMessageSend: actions.chat_message_send.chatMessageSend,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ChatInputField);
