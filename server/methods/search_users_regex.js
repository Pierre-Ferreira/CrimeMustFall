import {SearchUsersRegex} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {

  Meteor.methods({
    'search_users_regex'(searchString) {
console.log('search_users_regex',searchString)
      let finalCursor = searchString.split(' ').reduce((cursorPrev,subString) => {
        let cursorSub =  Meteor.users.find({ $or: [
          { "profile.fullName": { $regex: subString, $options: "i" }},
          { "profile.surname": { $regex: subString, $options: "i" }},
          { "profile.nickname": { $regex: subString, $options: "i" }},
        ]},{fields: {profile: 1}}).fetch();
         cursorPrev.push(cursorSub)
         return cursorPrev
      },[])
      return finalCursor
    }
  });
}
