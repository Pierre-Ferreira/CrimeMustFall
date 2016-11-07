import { configure } from '@kadira/storybook';
import 'bootstrap-loader';

function loadStories() {
  // require('../.stories');
  require('../client/modules/core/components/.stories');
}

configure(loadStories, module);
