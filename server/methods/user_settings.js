// import {Users} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'settings_user_info_save'(_id, userInfoObj) {
console.log("HI",userInfoObj)
      check(userInfoObj.fullNameRef, String)
      check(userInfoObj.surnameRef, String)
      Meteor.users.update(_id, {$set: {profile: userInfoObj}})
    }
  });
}
