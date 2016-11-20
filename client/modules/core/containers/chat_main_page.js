import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ChatMainPage from '../components/chat_main_page.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, global_functions} = context();
  let getMyChatsInitiated = Meteor.subscribe('get_my_chats_initiated', Meteor.userId())
  let getMyChatsAlerted = Meteor.subscribe('get_my_chats_alerted', Meteor.userId())
  let getUserProfile = Meteor.subscribe('user_profile')
  let noContactsFlag = false
  if (getMyChatsInitiated.ready() && getMyChatsAlerted.ready() && getUserProfile.ready()) {
    let userProfile = Meteor.users.findOne(Meteor.userId()).profile
    let userConnections = userProfile &&
                          userProfile.contacts &&
                          userProfile.contacts.connected
    if (!userConnections || userConnections.length === 0)
      noContactsFlag = true
    let myChatsInitiated = Collections.AlertConversations.find(
                           {"initiator_id": Meteor.userId()},
                           {sort: {createdAt: -1}})
                           .fetch()
    let myChatsAlerted = Collections.AlertConversations.find(
                         { "contacts_alerted_ids": { $in: [Meteor.userId()] } },
                         {sort: {createdAt: -1}})
                         .fetch()

console.log(myChatsAlerted)
    onData(null, {myChatsInitiated, myChatsAlerted, global_functions, noContactsFlag});
  }
};

export const depsMapper = (context, actions) => ({
  createNewChat: actions.chat_create_new.createNewChat,
  goToChat: actions.go_to_chat.goToChat,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ChatMainPage);
