import {AlertConversations} from '/lib/collections';

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
      AlertConversations.update(chat_id, { $push: { 'messages' : msgObj } })
    }
  });
}
