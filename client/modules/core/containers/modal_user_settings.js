import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ModalUserSettings from '../components/modal_user_settings.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const showModal = LocalState.get('SHOW_USER_SETTINGS_MODAL')||false;
  onData(null, {showModal});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ModalUserSettings);
