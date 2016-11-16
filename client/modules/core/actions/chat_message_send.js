export default {
  chatMessageSend({Meteor, LocalState, FlowRouter}, messageStr, chat_id) {
console.log('chat_message_send:', messageStr)
    Meteor.call('chat_message_update',messageStr, chat_id, (err, result) => {})
  }
}
