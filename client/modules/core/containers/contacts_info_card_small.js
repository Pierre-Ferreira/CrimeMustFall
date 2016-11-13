import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ContactsInfoCardSmall from '../components/contacts_info_card_small.jsx';

export const composer = (infoObj, onData) => {
console.log("infoObj::",infoObj)
  let {context} = infoObj
// console.log("context::",context())
  const {Meteor, Collections} = context();
  let {_id} = infoObj.contactDetails
  let contactID = _id
console.log("contactID::",contactID)
  if (Meteor.subscribe('get_contact_profile',contactID).ready()){
    let contactDetails = Meteor.users.findOne(contactID)
    // Check if the contact is connected to the user.
    let contactsConnectedArr = contactDetails.profile &&
                               contactDetails.profile.contacts &&
                               contactDetails.profile.contacts.connected ||
                               []
    for(let z = 0; z < contactsConnectedArr.length; z++) {
      if (contactsConnectedArr[z] === Meteor.userId()) {
        contactDetails.contactConnected = true
        break
      } else {
        contactDetails.contactConnected = false
      }
    }
    // Check if the user has a connect request from the contact.
    let requestedByMeArr = contactDetails.profile &&
                           contactDetails.profile.contacts &&
                           contactDetails.profile.contacts.requestedByMe ||
                           []
    for(let z = 0; z < requestedByMeArr.length; z++) {
      if (requestedByMeArr[z] === Meteor.userId()) {
        contactDetails.contactConnectRequest = true
        break
      } else {
        contactDetails.contactConnectRequest = false
      }
    }
    // Check if the contact has a connect request from the user.
    let requestsToMeArr = contactDetails.profile &&
                          contactDetails.profile.contacts &&
                          contactDetails.profile.contacts.requestsToMe ||
                          []
    for(let z = 0; z < requestsToMeArr.length; z++) {
      if (requestsToMeArr[z] === Meteor.userId()) {
        contactDetails.userConnectRequest = true
        break
      } else {
        contactDetails.userConnectRequest = false
      }
    }
    onData(null, {contactDetails});
  }
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
