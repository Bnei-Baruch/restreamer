import React, {Component} from 'react'
import { Divider, Segment, Label, Input, Button, Select } from 'semantic-ui-react'
import {getData, putData} from "../shared/tools";


class Restreamer extends Component {

    state = {
        name: "",
        language: "heb",
        restream: {}
    };

    componentDidMount() {
        getData(`restream`, (restream) => {
            console.log(":: Got restream: ",restream);
            this.setState({restream});
        });
    };

    addRestream = (del) => {
        let {restream} = this.state;
        putData(`restream`, restream, (data) => {
            console.log(" :: Save presets callback: ", data);
            this.setState({restream});
        });
    };

    render() {

        const {name,language} = this.state;

        const options = [
            { key: 'heb', text: 'Hebrew', value: 'heb' },
            { key: 'rus', text: 'Russian', value: 'rus' },
            { key: 'eng', text: 'English', value: 'eng' },
        ]

        return(
            <Segment padded textAlign='center' color='brown'>
                <Label  size='big' >
                    <Input type='text' placeholder='Type name...'
                           value={name} action
                           onChange={e => this.setState({name: e.target.value})}>
                        <input />
                        <Select compact options={options} value={language}
                                onChange={(e, {value}) => this.setState({language: value})} />
                        <Button type='submit' color='green' onClick={this.addRestream}>Add</Button>
                    </Input>
                </Label>
                <Divider />

            </Segment>
        );
    }
}

export default Restreamer;