export default {
  goToChat({Meteor, LocalState, FlowRouter}, chatId) {
    FlowRouter.go("/chat_page/"+chatId)
  }
}
