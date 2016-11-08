import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('user_profile', function (user_profileId) {
    return Meteor.users.find(user_profileId, {fields : {profile: 1}});
  });
}
