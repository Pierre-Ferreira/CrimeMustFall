export default {
  createNewChat({Meteor, LocalState, FlowRouter}) {
    Meteor.call('chat_message_create', (err, result) => {
      if (err)
        return Meteor.err.message
      else {
console.log(result)
        FlowRouter.go("/chat_page/"+result)
      }
    })
  }
}
