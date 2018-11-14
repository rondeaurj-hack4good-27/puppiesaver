import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainNav from './components/MainNav';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainNav />
        <Footer />
      </div>
    );
  }
}

export default App;
