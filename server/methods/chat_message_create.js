// import {ChatMessageCreate} from '/lib/collections';
import {AlertConversations} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'chat_message_create'() {
      let newMsgObj = {
        createdAt: new Date(),
        initiator_id: Meteor.userId(),
        contacts_alerted_ids: [],
        message: []
      }
console.log('newMsgObj:',newMsgObj)
      return AlertConversations.insert(newMsgObj)
    }
  });
}
