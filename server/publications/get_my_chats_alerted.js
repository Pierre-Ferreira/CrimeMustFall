import {AlertConversations} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('get_my_chats_alerted', function (userId) {
    return AlertConversations.find({ "contacts_alerted_ids": { $in: [userId] } })

  });
}
