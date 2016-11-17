import {GetChatMessages} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('get_chat_messages', function (get_chat_messagesId) {
    return GetChatMessages.find(get_chat_messagesId);
  });
}
