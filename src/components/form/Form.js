import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import Checkbox from 'material-ui/Checkbox';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';

import './Form.css';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: true,
            radio: 'yes',
            toggled: true,
        };
        this.onCheck = this.onCheck.bind(this);
        this.onRadio = this.onRadio.bind(this);
        this.onToggle = this.onToggle.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onCheck() {
        this.setState(prevState => ({
            checked: !prevState.checked,
        }));
    }

    onRadio(event, value) {
        this.setState({
            radio: value,
        });
    }

    onToggle(event, value) {
        this.setState({
            toggled: value,
        });
    }

    onChange(event, value) {
        this.setState({
            text: value,
        });
    }

    render() {
        return (
            <div>
                <Paper className="paper" zDepth={ 2 }>
                    <div className="form-group">
                        <Checkbox
                            label="Simple check"
                            checked={ this.state.checked }
                            onCheck={ this.onCheck }
                        />
                    </div>


                    <div className="form-group">
                        <RadioButtonGroup
                            name="simpleBadio"
                            defaultSelected={ this.state.radio }
                            onChange={ this.onRadio }
                        >
                            <RadioButton
                                value="yes"
                                label="Yes"
                            />
                            <RadioButton
                                value="no"
                                label="No"
                            />
                        </RadioButtonGroup>
                    </div>

                    <div className="form-group">
                        <Toggle
                            label="Simple toggle"
                            toggled={ this.state.toggled }
                            onToggle={ this.onToggle }
                        />
                    </div>

                    <div className="form-group">
                        <TextField
                            hintText="Text field"
                            value={ this.state.text }
                            onChange={ this.onChange }
                        />
                    </div>
                </Paper>
            </div>
        );
    }
}
