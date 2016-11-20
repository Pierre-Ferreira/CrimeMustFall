import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import MyChatsAlertedButton from '../components/my_chats_alerted_button.jsx';

export const composer = (infoObj, onData) => {
  let {context, chat} = infoObj
  const {Meteor, Collections, global_functions} = context();
  if (Meteor.subscribe('get_contact_profile',chat.initiator_id).ready()) {
    let contactProfile = Meteor.users.findOne(chat.initiator_id).profile
    chat.initiator_name = `${contactProfile.fullName} "${contactProfile.nickname}" ${contactProfile.surname}`
    onData(null, {chat, global_functions});
  }
};

export const depsMapper = (context, actions) => ({
  goToChat: actions.go_to_chat.goToChat,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MyChatsAlertedButton);
