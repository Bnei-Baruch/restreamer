import React, {Component} from 'react'
import { Divider, Segment, Label, Input, Button } from 'semantic-ui-react'
import {getData, putData} from "../shared/tools";


class Restreamer extends Component {

    state = {
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

        const {} = this.state;


        return(
            <Segment textAlign='center' color='brown'>
                <Label attached='top' size='big' >

                </Label>
                <Divider />

            </Segment>
        );
    }
}

export default Restreamer;