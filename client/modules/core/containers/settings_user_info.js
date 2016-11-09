import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import SettingsUserInfo from '../components/settings_user_info.jsx';

export const composer = ({context, clearErrors}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  let propsObj = {}
  propsObj.saveSuccess = LocalState.get('SAVING_SUCCESS_FLAG')
  propsObj.fullNameError = LocalState.get('SAVING_ERROR_FULLNAME_REQUIRED')
  propsObj.surnameError = LocalState.get('SAVING_ERROR_SURNAME_REQUIRED')
  propsObj.schemaError = LocalState.get('SAVING_ERROR')
  if (Meteor.subscribe('user_profile', Meteor.userId()).ready()) {
    let user_profile = Meteor.users.findOne(Meteor.userId())
    propsObj.user_profile = user_profile
    onData(null, propsObj); // IS THERE A BETTER WAY? IS THIS BEST PRACTICE?
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
