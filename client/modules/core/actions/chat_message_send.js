export default {
  chatMessageSend({Meteor, LocalState, FlowRouter}, messageStr, chat_id) {
    Meteor.call('chat_message_update',messageStr, chat_id, (err, result) => {})
  }
}
