import { createStore } from 'redux';
import counterApp from './reducers';

export const store = createStore(
    counterApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
		window.__REDUX_DEVTOOLS_EXTENSION__(),
);
