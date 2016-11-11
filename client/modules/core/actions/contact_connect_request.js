export default {
  connectContactRequest({Meteor, LocalState, FlowRouter},contactID){
    console.log('connectContactRequest', contactID)
    Meteor.call('create_contact_connect_request', contactID, (err, result) => {
      if (err) {
        console.log('create_contact_request ERROR:', err.message)
      } else {
        console.log('create_contact_request RESULT:', result)
      }
    })
  }
}
