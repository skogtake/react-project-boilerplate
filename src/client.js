import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/header/Header';
import Form from './components/form/Form';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Header />
                    <Form />
                </div>
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
