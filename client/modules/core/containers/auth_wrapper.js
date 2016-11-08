import {
  useDeps, composeWithTracker, composeAll
} from 'mantra-core';

import {authComposer} from 'meteor-auth';
import Component from '../components/auth_wrapper';

export const composer = ({context}, onData) => {
  const {Meteor} = context();

  // Don't force sub to be ready for
  // boost to time until rendering main content
  // Meteor.subscribe('accounts.currentUser').ready();
  onData(null, {});
};

export default composeAll(
  composeWithTracker(authComposer),
  composeWithTracker(composer),
  useDeps()
)(Component);
