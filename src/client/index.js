import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install({
	onUpdateReady: () => OfflinePluginRuntime.applyUpdate(),
	onUpdated: () => (window.swUpdate = true),
});

import App from './containers/App';
import store from './store';

render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root'),
);
