import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';

export default class NotesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [],
        };
    }

    componentDidMount() {
        fetch('/notes')
            .then(response => response.json())
            .then(responseJson => this.setState({ notes: responseJson }));
    }

    render() {
        console.log('this.state.notes', this.state.notes);
        let notes = this.state.notes.map((item, index) => {
            return (
                <Link key={ index } to={ `/note/${ item.id }` }>
                    <ListItem primaryText={ `Note ${ item.id }: ${ item.title }` }/>
                </Link>
            );
        });
        return (
            <div>
                there is a notes list

                <List>
                  { notes }
                </List>
            </div>
        );
    }
}
