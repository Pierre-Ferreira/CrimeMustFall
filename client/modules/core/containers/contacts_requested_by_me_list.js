import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ContactsRequestedByMeList from '../components/contacts_requested_by_me_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ContactsRequestedByMeList);
