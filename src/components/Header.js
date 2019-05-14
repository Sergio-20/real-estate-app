import React, { Component } from 'react';

import '../styles/style.css';

export default class RealEstate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Sergio'
    };
  }

  render() {
    return(
      <header>

        <div className="logo"> Logo </div>

        <nav>

          <a href="#">Create Ads</a>
          <a href="#">About Us</a>
          <a href="#">Log In</a>
          <a href="#" className="register-btn">Register</a>

        </nav>

      </header>
    );
  }

}
