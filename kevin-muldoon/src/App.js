import React, { Component } from 'react';
// import './App.css';
import Person from './components/person/person';
// import Navbar from './components/navbar/navbar';
// import Navbar2 from './components/navbar2/navbar2';
import Navbar3 from './components/navbar3/navbar3';

import Chrome from './components/chrome/chrome';
import Sidemenu from './components/sidemenu/sidemenu';
import Body from './components/body/body';
// import GridExperiments from './components/gridExperiments/gridExperiments'
import LorumIpsum from './utilities/lorumIpsum';

class App extends Component {

  state = {
    persons: [
      { name: 'Bob', age: 28 },
      { name: 'Sue', age: 29 },
      { name: 'Joe', age: 26 }
    ],
    sideMenuOpen: false
  }

  sideMenuToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideMenuOpen: !prevState.sideMenuOpen }
    });
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: [newName], age: 20 },
        { name: 'Suzy', age: 20 },
        { name: 'Joe', age: 20 }
      ]
    })
  }

  changedNameHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 20 },
        { name: event.target.value, age: 20 },
        { name: 'Joe', age: 20 }
      ]
    })
  }

  render() {

    let chrome;

    if (this.state.sideMenuOpen) {
      chrome = <Chrome sideMenuToggleClickHandler={this.sideMenuToggleClickHandler} />;
    }

    return (
      <div className="App">
        <Navbar3 sideMenuToggleClickHandler={this.sideMenuToggleClickHandler} />
        <Sidemenu show={this.state.sideMenuOpen} />
        {chrome}
        <Body />
      </div>
    );
  }
}

export default App;
