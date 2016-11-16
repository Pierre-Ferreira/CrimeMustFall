import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ChatMainPage from '../components/chat_main_page.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
console.log('Meteor.userId():',Meteor.userId())
  if (Meteor.subscribe('get_my_chats_initiated', Meteor.userId()).ready()) {
    let myChatsInitiated = Collections.AlertConversations.find({"initiator_id": Meteor.userId()},{sort: {createdAt: -1}}).fetch()
    if (Meteor.subscribe('get_my_chats_alerted', Meteor.userId()).ready()) {
      let myChatsAlerted = Collections.AlertConversations.find({ "contacts_alerted_ids": { $in: [Meteor.userId()] } }, {sort: {createdAt: -1}}).fetch()
      onData(null, {myChatsInitiated, myChatsAlerted});
    }
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
