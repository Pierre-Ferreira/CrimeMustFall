import {AlertConversations} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('get_chat_messages', function (chat_id) {
    return AlertConversations.find(chat_id);
  });
}
