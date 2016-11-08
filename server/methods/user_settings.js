// import {Users} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'settings_user_info_save'(_id, userInfoObj) {
console.log("HI",userInfoObj)
      check(userInfoObj.fullName, String)
      check(userInfoObj.surname, String)
      Meteor.users.update(_id, {$set: {profile: userInfoObj}})
    }
  });
}
