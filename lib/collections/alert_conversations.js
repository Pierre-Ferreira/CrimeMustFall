import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const AlertConversations = new Mongo.Collection('alert_conversations');
let schema = new SimpleSchema({
  _id: {
      type: String,
      regEx: SimpleSchema.RegEx.Id
  },
  createdAt: {
      type: Date
  },
});
AlertConversations.attachSchema(schema);

export default AlertConversations;
