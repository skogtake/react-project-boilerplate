import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Notes from './Notes';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                there is a home
                <nav>
                    <Link to='/note'>Notes</Link>
                </nav>
            </section>
        );
    }
}
