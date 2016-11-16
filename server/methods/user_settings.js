// import {Users} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'settings_user_info_save'(_id, userInfoObj) {
// Validate arguments.
      check(userInfoObj.fullName, String)
      check(userInfoObj.surname, String)
      check(userInfoObj.nickname, String)
      check(userInfoObj.address, String)
      check(userInfoObj.suburb, String)
      check(userInfoObj.city, String)
      check(userInfoObj.contactNo, String)

// Extract the profile from the user document.
      let user_cursor = Meteor.users.findOne({"_id":_id}, {fields: {profile: 1}})

// Set the necessary fields in the profile.
      user_cursor.profile.fullName = userInfoObj.fullName
      user_cursor.profile.surname = userInfoObj.surname
      user_cursor.profile.nickname = userInfoObj.nickname
      user_cursor.profile.address = userInfoObj.address
      user_cursor.profile.suburb = userInfoObj.suburb
      user_cursor.profile.city = userInfoObj.city
      user_cursor.profile.contactNo = userInfoObj.contactNo

// Update the document.
      Meteor.users.update(_id, {$set: {profile: user_cursor.profile}})
    }
  });
}
