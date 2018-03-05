import React, { Component } from 'react';
import Header from './components/Header';
import MainSection from './components/Main';
import ImageSection from './components/Image';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header title="Grace Hopper"/>
        <MainSection description="Hola Mundo"/>
        <ImageSection/>
      </div>
    );
  }
}

export default App;
