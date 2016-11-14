import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import MyContactList from '../components/my_contact_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
console.log('my_contacts_list IN:')
  if (Meteor.subscribe('get_contact_profile', Meteor.userId()).ready()) {
    let myContacts = Meteor.users.findOne(Meteor.userId()).profile
                      && Meteor.users.findOne(Meteor.userId()).profile.contacts
                      && Meteor.users.findOne(Meteor.userId()).profile.contacts.connected

console.log('my_contactsCONTAINER:', {myContacts})
    onData(null, {myContacts}); // IS THERE A BETTER WAY? IS THIS BEST PRACTICE?
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MyContactList);
