export default {
  sendAlertSms({Meteor, LocalState, FlowRouter}, messageStr) {
    Meteor.call('sms_chat_alert',messageStr, Meteor.userId(), (err, result) => {})
  }
}
