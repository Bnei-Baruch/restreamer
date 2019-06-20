import React, {Component} from 'react';
import { Container, Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Restreamer from "./components/Restreamer";

class App extends Component {

  state = {};

  render() {

    const panes = [
      { menuItem: { key: 'coder', icon: 'cog', content: 'ReStream' },
        render: () => <Tab.Pane attached={false} >
          <Restreamer />
        </Tab.Pane> },
    ];

    return (
        <Container text>
          <Tab menu={{ secondary: true, pointing: true, color: "blue"}} panes={panes} />
        </Container>
    );
  }
}

export default App;