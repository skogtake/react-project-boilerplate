import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import counterApp from './reducers';

const store = createStore(counterApp, composeWithDevTools());

export default store;
