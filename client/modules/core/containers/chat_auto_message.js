import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ChatAutoMessage from '../components/chat_auto_message.jsx';
import {AlertConversations} from '/lib/collections';

export const composer = (infoObj, onData) => {
  let {context} = infoObj
  let {chat_id} = infoObj

  const {Meteor, Collections} = context();

  if (Meteor.subscribe('get_chat_messages',chat_id).ready()) {
    let messageDoc = AlertConversations.findOne(chat_id)
    let initiator_id = messageDoc.initiator_id
    let isInitiator = (initiator_id === Meteor.userId()) ? true : false
    onData(null, {isInitiator});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ChatAutoMessage);
