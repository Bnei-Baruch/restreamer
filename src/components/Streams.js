import React, {Component} from 'react'
import { Message, Table, Checkbox } from 'semantic-ui-react'

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

        const {index} = this.props;
        const {name,language} = this.props.db.restream[index];
        const {url} = this.state;

        return (
            <Message onDismiss={this.removeStream}>
                <Checkbox toggle />
                {name}
            </Message>
        );
    }
}

export default Streams;