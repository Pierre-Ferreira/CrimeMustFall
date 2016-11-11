import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.init();
//
DocHead.setTitle("CRIMEMUSTFALL");
let metaInfo = {name: "viewport", content: "width=device-width, initial-scale=1"};
DocHead.addMeta(metaInfo);
