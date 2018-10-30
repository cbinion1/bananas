import React, { Component } from 'react';
import './App.css';
import MyNavbar from './banner.jsx';
import MyCarousel from './carousel.jsx';
import MyFooter from './footer.jsx';
import MyDescription from './description.jsx';
import MyContact from './contact.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />
        <MyCarousel />
        <MyDescription />
        <MyContact />
        <MyFooter />
      </div>
    );
  }
}

export default App;
