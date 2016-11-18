import {
  useDeps, composeWithTracker, composeAll
} from 'mantra-core';

import {authComposer} from 'meteor-auth';
import Component from '../components/auth_wrapper';

export const composer = ({context}, onData) => {
  const {Meteor, FlowRouter, LocalState} = context();
  const isAuthenticated = false
  onData(null, {context, isAuthenticated});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(authComposer),
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
