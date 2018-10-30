import React, { Component } from 'react';
import './App.css';
import MyNavbar from './banner/banner.jsx';
import MyCarousel from './carousel/carousel.jsx';
import MyFooter from './footer/footer.jsx';
import MyDescription from './description/description.jsx';
import MyContact from './contact/contact.jsx';


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
