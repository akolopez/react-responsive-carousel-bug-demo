import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Carousel = require('react-responsive-carousel').Carousel
import 'react-responsive-carousel/lib/styles/carousel.css';

import sampleImage from './sample.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Carousel width={ 800 }>
          <div> <img src={ sampleImage } role="presentation"/> </div>
          <div> <img src={ sampleImage } role="presentation"/> </div>
          <div> <img src={ sampleImage } role="presentation"/> </div>
          <div> <img src={ sampleImage } role="presentation"/> </div>
        </Carousel>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
