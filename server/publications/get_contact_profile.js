import {GetContactProfile} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('get_contact_profile', function (contactID) {
    return Meteor.users.find(contactID, {fields: {'profile': 1}});
  });
}
