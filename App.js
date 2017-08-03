import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Mao’s Revolutionary Struggle Calendar</h2>
        </div>
        <p className="App-intro">
          October 16th, 1934: Long March Daily Schedule
        </p>
        <p className="Name-time">
          Name and select time of the event:
        </p>
        <form className="Time">
          <input className="Box" type="text" name="Event"></input>
          <br></br><br></br>
          <select className="Time-select">
            <option value="100">1:00</option>
            <option value="200">2:00</option>
            <option value="300">3:00</option>
            <option value="400">4:00</option>
            <option value="500">5:00</option>
            <option value="600">6:00</option>
            <option value="700">7:00</option>
            <option value="800">8:00</option>
            <option value="900">9:00</option>
            <option value="1000">10:00</option>
            <option value="1100">11:00</option>
            <option value="1200">12:00</option>
            <option value="1300">13:00</option>
            <option value="1400">14:00</option>
            <option value="1500">15:00</option>
            <option value="1600">16:00</option>
            <option value="1700">17:00</option>
            <option value="1800">18:00</option>
            <option value="1900">19:00</option>
            <option value="2000">20:00</option>
            <option value="2100">21:00</option>
            <option value="2200">22:00</option>
            <option value="2300">23:00</option>
            <option value="2400">24:00</option>
          </select>
          <br></br><br></br>
          <input className="button" type="submit" value="post to schedule"></input>
        </form>
      </div>
    );
  }
}

export default App;
