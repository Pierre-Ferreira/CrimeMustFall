import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('user_profile', function () {
    return Meteor.users.find(this.userId, {fields: {profile: 1}});
  });
}
