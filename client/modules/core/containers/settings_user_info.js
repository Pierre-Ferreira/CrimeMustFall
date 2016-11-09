import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import SettingsUserInfo from '../components/settings_user_info.jsx';

export const composer = ({context, clearErrors}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const error = LocalState.get('SAVING_ERROR_INPUT_REQUIRED')
  const error2 = LocalState.get('SAVING_ERROR')
  if (Meteor.subscribe('user_profile', Meteor.userId()).ready()) {
    let user_profile = Meteor.users.findOne(Meteor.userId())
    onData(null, {user_profile, error, error2}); // IS THERE A BETTER WAY? IS THIS BEST PRACTICE?
  }
  // clearErrors when unmounting the component.
  return clearErrors
};

export const depsMapper = (context, actions) => ({
  saveUserInfoAction: actions.settings_user_info.saveUserInfoAction,
  clearErrors: actions.settings_user_info.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SettingsUserInfo);
