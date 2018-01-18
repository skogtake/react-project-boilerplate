import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <AppBar
                    title="Notes"
                    iconElementLeft={ <div></div> }
                />
            </header>
        );
    }
}
