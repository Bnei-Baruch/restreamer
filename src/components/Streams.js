import React, {Component} from 'react'
import { Message, Menu, Checkbox, Icon, Label, Popup, Button, Modal, Header, Input } from 'semantic-ui-react'
import {getStatus} from "../shared/tools";

class Streams extends Component {

    state = {
        ival: null,
        url: "",
        online: false,
        open: false
    };

    componentDidMount() {
        let {index} = this.props;
        let ival = setInterval(() => getStatus(index , status => {
            console.log(status);
            this.setState({status});
        }), 1000 );
        this.setState({ival});
    };

    removeStream = () => {
        let {index,db} = this.props;
        let stream = db.restream[index];
        db.restream.splice(index, 1);
        console.log(stream);
        this.props.saveData(db);
    };

    toggleStream = () => {
        let {index} = this.props;
        console.log(" :: Toggle stream: " + index);
        this.setState({online: !this.state.online});
    };

    addUrl = () => {
        let {index,db} = this.props;
        db.restream[index].url = this.state.url;
        this.props.saveData(db);
        this.setState({ open: false });
    };

    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

    render() {

        const {index} = this.props;
        const {name,language,url} = this.props.db.restream[index];
        const {online} = this.state;

        return (
            <Message className='stream'>
                <Menu secondary>
                    <Menu.Item>
                        <Label size='big' color='red'>
                            00:00:00
                        </Label>
                    </Menu.Item>
                    <Menu.Item>
                        <Checkbox toggle
                                  checked={online}
                                  onChange={this.toggleStream} />
                    </Menu.Item>
                    <Menu.Item>
                        <Label size='big' color='grey'>
                            {language}
                        </Label>
                    </Menu.Item>
                    <Menu.Item>
                        <Popup inverted flowing position='top center' content={url} trigger={
                            <Button color='blue' onClick={this.open}>{name}</Button>} />
                        <Modal
                            open={this.state.open}
                            onClose={this.close}
                            basic
                            size='small'
                        >
                            <Header icon='browser' content={language.toLocaleUpperCase()+' : '+name} />
                            <Modal.Content>
                                <Input type='text' placeholder='Enter URL...'
                                       value={this.state.url} action fluid
                                       onChange={e => this.setState({url: e.target.value})}>
                                    <input />
                                    <Button size='big' color='green' onClick={this.addUrl}>Add</Button>
                                </Input>
                            </Modal.Content>
                        </Modal>
                    </Menu.Item>
                    <Menu.Item position='right'>
                        <Icon link name='close' onClick={this.removeStream} />
                    </Menu.Item>
                </Menu>
            </Message>
        );
    }
}

export default Streams;