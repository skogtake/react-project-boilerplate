import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Notes from './pages/Notes';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFromServer: {
                notes: [],
            },
        };
    }

    componentDidMount() {
        // fetch('/data')
        //     .then(response => response.json())
        //     .then(responseJson => this.setState({ dataFromServer: responseJson }))
        //     .then(data => console.log('this.state.dataFromServer', this.state.dataFromServer));
    }

    render() {
        return (
            <BrowserRouter>
                <MuiThemeProvider>
                    <div>
                        <Header/>

                        <Switch>
                            <Route exact path='/' component={ Home }/>
                            <Route path='/note' component={ Notes }/>
                        </Switch>
                    </div>
                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
