import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import MyContactList from '../components/my_contact_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('my_contacts_list_search', Meteor.userId()).ready()) {
    let user_profile_contacts = Meteor.users.findOne(Meteor.userId()).profile.contacts.connected

console.log('user_profile_contacts:',user_profile_contacts)
    onData(null, user_profile_contacts); // IS THERE A BETTER WAY? IS THIS BEST PRACTICE?
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MyContactList);
