import {EmergencyContactsSearch} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('emergency_contacts_search', function (searchString) {
    return Meteor.users.find({ $or: [
      { profile: {fullName: { $regex: /searchString/, $options: "i" }}},
      { profile: {surname: { $regex: /searchString/, $options: "i" }}}
    ]});
  });
}
