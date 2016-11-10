import {SearchUsersRegex} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {

  Meteor.methods({
    'search_users_regex'(searchString) {
console.log('INNMETHOD',searchString)
      let cursor =  Meteor.users.find({}, {fields: {profile: 1}}).fetch();
// console.log('INNMETHOD',searchString)
//       let cursor =  Meteor.users.find({ $or: [
//         { profile: {fullName: { $regex: ^/searchString/$, $options: "i" }}},
//         { profile: {surname: { $regex: /searchString/, $options: "i" }}}
//       ]}).fetch();
console.log('METHODRESULT',cursor)
      return cursor
    }
  });
}
