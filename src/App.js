import React, { Component } from 'react';
import './App.css';
import Main from './js/main';
class App extends Component {
  render() {
    return (
      <div className="App" onClick={AppActions.addItem.bind(null, 'this is the item')}>
        <Main />
      </div>
    );
  }
}

export default App;
