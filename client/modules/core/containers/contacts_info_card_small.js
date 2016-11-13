import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ContactsInfoCardSmall from '../components/contacts_info_card_small.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  connectContactRequest: actions.contact_connect_request.connectContactRequest,
  contactConnectRequestConfirm: actions.contact_connect_request_confirm.contactConnectRequestConfirm,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ContactsInfoCardSmall);
