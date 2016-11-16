import {AlertConversations} from '/lib/collections';
// lib/collections/alert_conversations.js
// server/methods/chat_message_update.js
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'chat_message_update'(messageStr, chat_id) {
      let msgObj = {
        createdAt: new Date(),
        sender_id: Meteor.userId(),
        content: messageStr
      }
console.log("chat_id", chat_id, 'msgObj:', msgObj)
      AlertConversations.update(chat_id, { $push: { 'message' : msgObj } })
      // AlertConversations.insert({ 'message' : [] })
    }
  });
}
