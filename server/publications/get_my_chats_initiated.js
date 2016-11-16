import {AlertConversations} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('get_my_chats_initiated', function (userId) {
    return AlertConversations.find({"initiator_id": userId})
  });
}
