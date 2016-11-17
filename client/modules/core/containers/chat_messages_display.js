import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ChatMessagesDisplay from '../components/chat_messages_display.jsx';
import {AlertConversations} from '/lib/collections';

export const composer = (infoObj, onData) => {
  let {context} = infoObj
  let {chat_id} = infoObj
  const {Meteor, Collections, global_functions} = context();
  let displayDate = global_functions.displayDate
  let displayTime = global_functions.displayTime
console.log(chat_id)
  if (Meteor.subscribe('get_chat_messages',chat_id).ready()) {
    let messageDoc = AlertConversations.findOne(chat_id)
    let initiator_id = messageDoc.initiator_id
    let messagesArr = messageDoc.messages.map((message, index) => {
      let messageObj = {}
      let contactID = message.sender_id
      messageObj.isInitiatorPost = (initiator_id === contactID) ? true : false
      messageObj.messageDate = displayDate(message.createdAt)
      messageObj.messageTime = displayTime(message.createdAt)
      messageObj.content = message.content
      let message_meta = {}
      if (Meteor.subscribe('get_contact_profile',contactID).ready()) {
        let contactProfile = Meteor.users.findOne(contactID).profile
        message_meta.senderName = `${contactProfile.fullName} "${contactProfile.nickname}" ${contactProfile.surname}`
        message_meta.address = contactProfile.address
        message_meta.suburb = contactProfile.suburb
        message_meta.city = contactProfile.city
      }
      messageObj.metaInfo = message_meta
      return messageObj
    })
console.log(messagesArr)
    messagesArr.reverse()
    onData(null, {messagesArr});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ChatMessagesDisplay);
