import React, { Component } from 'react';
import './App.css';
import AppActions from './js/action/app-actions';
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
