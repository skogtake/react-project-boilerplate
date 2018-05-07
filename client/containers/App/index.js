import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Counter from '../../components/Counter';

import styles from './styles.css';

class App extends Component {
    render() {
        return <Counter />;
    }
}

export default CSSModules(App, styles, { allowMultiple: true });
