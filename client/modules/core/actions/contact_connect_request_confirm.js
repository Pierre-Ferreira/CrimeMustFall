export default {
  contactConnectRequestConfirm({Meteor, LocalState, FlowRouter}, contactID) {
    Meteor.call('confirm_contact_connect_request', contactID, (err, result) => {
      if (err)
        return 0
    })
  }
}
