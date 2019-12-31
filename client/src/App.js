import React from 'react';
import logo from './logo.svg';
import './App.css';
import RandomGod from './components/RandomGod';




class App extends React.Component {
  render() {
    return (
      <div className="App">
        <RandomGod />
      </div>
    )
  }
}

export default App;
