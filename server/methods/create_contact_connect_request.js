import {CreateContactRequest} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'create_contact_connect_request'(contactID) {
      console.log('contactID:',contactID)
      const userID = Meteor.userId()
      //Update the contact being requested.
      Meteor.users.update(contactID,{ $push: { "profile.contacts2.requestsToMe" : userID } })
      //Update the user with the request sent.
    }
  });
}
