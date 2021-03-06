import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const AlertConversations = new Mongo.Collection('alert_conversations');
let Schema = {}

Schema.Messages = new SimpleSchema({

})

Schema = new SimpleSchema({
  _id: {
      type: String,
      regEx: SimpleSchema.RegEx.Id
  },
  createdAt: {
      type: Date,
      optional: true
  },
  initiator_id: {
      type: String,
      optional: true
  },
  contacts_alerted_ids: {
      type: [String],
      optional: true
  },
  // messages: {
  //     type: Schema.Messages,
  //     optional: true
  // }
  messages: {
      type: [Object],
      optional: true
  },
  "messages.$.createdAt": {
    type: Date,
    optional: true
  },
  "messages.$.sender_id": {
    type: String,
    optional: false
  },
  "messages.$.content": {
    type: String,
    optional: true
  }
});
AlertConversations.attachSchema(Schema);

export default AlertConversations;
