import {AlertConversations} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'chat_message_create'() {
      let userDoc = Meteor.users.findOne(Meteor.userId())
      let userContacts = userDoc.profile.contacts.connected
      let newMsgObj = {
        createdAt: new Date(),
        initiator_id: Meteor.userId(),
        contacts_alerted_ids: userContacts,
        messages: []
      }
      return AlertConversations.insert(newMsgObj)
    }
  });
}
