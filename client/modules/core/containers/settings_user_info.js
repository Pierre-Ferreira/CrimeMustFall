import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import SettingsUserInfo from '../components/settings_user_info.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  saveUserInfoAction: actions.settings_user_info.saveUserInfoAction,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SettingsUserInfo);