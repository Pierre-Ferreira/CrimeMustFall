import {SearchUsersRegex} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {

  Meteor.methods({
    'search_users_regex'(searchString) {
console.log('INNMETHOD',searchString)
      let finalCursor = searchString.split(' ').reduce((cursorPrev,subString) => {
        let cursorSub =  Meteor.users.find({ $or: [
          { "profile.fullName": { $regex: subString, $options: "i" }},
          { "profile.surname": { $regex: subString, $options: "i" }},
          { "profile.nickname": { $regex: subString, $options: "i" }},
        ]},{fields: {profile: 1}}).fetch();
  console.log('SUBRESULT', cursorPrev, cursorSub)
         cursorPrev.push(cursorSub)
         return cursorPrev
      },[])
      console.log('METHODRESULT',finalCursor)
      return finalCursor
    }
  });
}
