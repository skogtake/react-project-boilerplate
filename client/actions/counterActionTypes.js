import { INCREMENT, DECREMENT } from '../constants/counter';

export function onIncrement() {
	return { type: 'INCREMENT' };
}

export function onDecrement() {
	return { type: 'DECREMENT' };
}
