import React, {Component} from 'react';
import { Segment, Tab } from 'semantic-ui-react'
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
        <Segment basic padded>
          <Tab menu={{ secondary: true, pointing: true, color: "blue"}} panes={panes} />
        </Segment>
    );
  }
}

export default App;