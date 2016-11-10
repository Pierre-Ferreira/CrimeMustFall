import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import EmergencyContactsSearch from '../components/emergency_contacts_search.jsx';

export const composer = ({context, actions}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const searchCursor = LocalState.get('SEARCH_USERS_REGEX_CURSOR')
  onData(null, {searchCursor});
};

export const depsMapper = (context, actions) => ({
  searchEmergencyContacts: actions.emergency_contacts_search.searchEmergencyContacts,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(EmergencyContactsSearch);
