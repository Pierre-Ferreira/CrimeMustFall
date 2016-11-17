import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ChatMessagesDisplay from '../components/chat_messages_display.jsx';

export const composer = (infoObj, onData) => {
  let {context} = infoObj
  let {chat_id} = infoObj
  const {Meteor, Collections} = context();
console.log(chat_id)
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ChatMessagesDisplay);
