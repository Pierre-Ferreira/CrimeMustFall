import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ChatMainPage from '../components/chat_main_page.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ChatMainPage);
