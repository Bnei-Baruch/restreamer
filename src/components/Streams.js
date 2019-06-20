import React, {Component} from 'react'
import { Message } from 'semantic-ui-react'

class Streams extends Component {

    state = {
        url: "This is a url",
    };

    componentDidMount() {
    };

    removeStream = () => {
        let {index,db} = this.props;
        let stream = db.restream[index];
        db.restream.splice(index, 1);
        console.log(stream);
        this.props.saveData(db);
    };

    render() {

        const {url} = this.state;

        return(
            <Message info onDismiss={this.removeStream}>
                {url}
            </Message>
        );
    }
}

export default Streams;