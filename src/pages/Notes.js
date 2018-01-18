import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Note from './Note';
import NotesList from './NotesList';

export default class Notes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                notes:
                <nav>
                    <Switch>
                        <Route exact path='/note' component={ NotesList }/>
                        <Route path='/note/:number' component={ Note }/>
                    </Switch>
                </nav>
            </section>
        );
    }
}
