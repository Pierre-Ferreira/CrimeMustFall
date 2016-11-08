import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('user_profile', function (user_Id) {
    return Meteor.users.find(user_Id, {fields: {profile: 1}});
  });
}
