import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ContactsRequestedByMeList from '../components/contacts_requested_by_me_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
console.log('requestedByMe IN:')
  if (Meteor.subscribe('get_contact_profile', Meteor.userId()).ready()) {
    let contactsRequestedByMe = Meteor.users.findOne(Meteor.userId()).profile
                                && Meteor.users.findOne(Meteor.userId()).profile.contacts
                                && Meteor.users.findOne(Meteor.userId()).profile.contacts.requestedByMe
console.log('contactsRequestedByMeCONTAINER:', {contactsRequestedByMe})
    onData(null, {contactsRequestedByMe}); // IS THERE A BETTER WAY? IS THIS BEST PRACTICE?
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ContactsRequestedByMeList);
