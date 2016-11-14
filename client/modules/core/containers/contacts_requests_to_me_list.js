import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ContactsRequestsToMeList from '../components/contacts_requests_to_me_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  console.log('requestsToMe IN:')
    if (Meteor.subscribe('get_contact_profile', Meteor.userId()).ready()) {
      let contactsRequestsToMe = Meteor.users.findOne(Meteor.userId()).profile
                                 && Meteor.users.findOne(Meteor.userId()).profile.contacts
                                 && Meteor.users.findOne(Meteor.userId()).profile.contacts.requestsToMe
  console.log('contactsRequestsToMeCONTAINER:', {contactsRequestsToMe})
      onData(null, {contactsRequestsToMe}); // IS THERE A BETTER WAY? IS THIS BEST PRACTICE?
    }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ContactsRequestsToMeList);
