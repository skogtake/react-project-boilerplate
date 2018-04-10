import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Counter from '../../components/Counter';

import styles from './styles.css';

@CSSModules(styles, { allowMultiple: true })
class App extends Component {
    render() {
        return <Counter />;
    }
}

export default App;
