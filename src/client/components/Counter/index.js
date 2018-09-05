import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import { pipe } from 'lodash/fp';

import { onIncrement, onDecrement } from '../../actions/counterActionTypes';

import styles from './styles.css';

class Counter extends Component {
	static propTypes = {
		value: PropTypes.number.isRequired,
		onIncrement: PropTypes.func.isRequired,
		onDecrement: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);
		this.incrementAsync = this.incrementAsync.bind(this);
		this.incrementIfOdd = this.incrementIfOdd.bind(this);
	}

	incrementIfOdd() {
		if (this.props.value % 2 !== 0) {
			this.props.onIncrement();
		}
	}

	incrementAsync() {
		setTimeout(this.props.onIncrement, 1000);
	}

	render() {
		const { value, onIncrement, onDecrement } = this.props;
		return (
			<Fragment>
				<p styleName="red">Clicked: {value} times</p>

				<p>
					<button onClick={onIncrement}>+</button>

					<button onClick={onDecrement}>-</button>
				</p>

				<p>
					<button onClick={this.incrementIfOdd}>Increment if odd</button>

					<button onClick={this.incrementAsync}>Increment async</button>
				</p>
			</Fragment>
		);
	}
}

const applyStyles = CSSModules(styles, { allowMultiple: true });
const applyConnect = connect(
	state => ({ value: state.counter }),
	{
		onIncrement,
		onDecrement,
	},
);

export default pipe(
	applyStyles,
	applyConnect,
)(Counter);
