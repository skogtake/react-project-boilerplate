import React, { Fragment, Component } from 'react';
import CSSModules from 'react-css-modules';
import { Switch, Route, Link } from 'react-router-dom';

import Counter from '../../components/Counter';
import Home from '../Home';

import styles from './styles.css';

class App extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<Link to='/'>Home</Link>
				</div>

				<div>
					<Link to='/counter'>Counter</Link>
				</div>

				<Switch>
					<Route exact path="/" component={ Home }/>
					<Route exact path="/counter" component={ Counter }/>
				</Switch>
			</Fragment>
		);
	}
}

export default CSSModules(App, styles, { allowMultiple: true });
