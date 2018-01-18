import React, { Component } from 'react';

export default class Note extends Component {
    constructor(props) {
        super(props);

        this.state = {
            noteData: {},
        };
    }

    componentDidMount() {
        let id = parseInt(this.props.match.params.number, 10);
        fetch(`/notes/${id}`)
            .then(response => response.json())
            .then(responseJson => this.setState({ noteData: responseJson }));
    }

    render() {
        return (
            <div>
                { this.state.noteData.text }
            </div>
        );
    }
}
