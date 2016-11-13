import {ConfirmContactConnectRequest} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'confirm_contact_connect_request'(contactID) {
console.log('confirm_contact_connect_request', contactID)
      check(contactID, String)
      console.log('contactID:',contactID)
      const userID = Meteor.userId()
      //Update the contact being requested.
      Meteor.users.update(contactID,{ $push: { "profile.contacts.connected" : userID } })
console.log('DONE1')
      Meteor.users.update(contactID,{ $pull: { "profile.contacts.requestedByMe" : userID } })

console.log('DONE2')
      //Update the user with the request sent.
      Meteor.users.update(userID,{ $push: { "profile.contacts.connected" : contactID } })
console.log('DONE3')
      Meteor.users.update(userID,{ $pull: { "profile.contacts.requestsToMe" : contactID } })
console.log('DONE4')
    }
  });
}
