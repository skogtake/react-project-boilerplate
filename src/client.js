import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
	render() {
		return 'hello world';
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
