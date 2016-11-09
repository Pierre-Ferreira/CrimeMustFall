import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

// const Users = new Mongo.Collection('users');
let Schema = {};
Schema.UserProfile = new SimpleSchema({
  fullName: {
      type: String,
      regEx: /^[a-zA-Z]{2,25}$/,
      optional: false
  },
  surname: {
      type: String,
      regEx: /^[a-zA-Z]{2,25}$/,
      optional: false
  },
  // birthday: {
  //     type: Date,
  //     optional: true
  // },
  // gender: {
  //     type: String,
  //     allowedValues: ['Male', 'Female'],
  //     optional: true
  // },
  // organization : {
  //     type: String,
  //     regEx: /^[a-z0-9A-z .]{3,30}$/,
  //     optional: true
  // },
});
Schema.User = new SimpleSchema({
  _id: {
      type: String,
      regEx: SimpleSchema.RegEx.Id
  },
  // username: {
  //     type: String,
  //     regEx: /^[a-z0-9A-Z_]{3,15}$/,
  //     custom: function () {
  //         console.log(this);
  //     }
  // },
  emails: {
      optional: true,
      type: [Object],
      custom: function () {
          console.log(this);
      }
  },
  "emails.$.address": {
      optional: true,
      type: String,
      regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
      optional: true,
      type: Boolean
  },
  createdAt: {
      type: Date
  },
  profile: {
    type: Schema.UserProfile,
    optional: true
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  }
})
Meteor.users.attachSchema(Schema.User);

// export default Users;
