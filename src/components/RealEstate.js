import React, { Component } from 'react';

import Header from './Header.js';
import Filter from './Filter.js';
import Listings from './Listings.js';

export default class RealEstate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Sergio'
    };
  }

  render() {
    return(
      <div>

      <Header />

      <section>
        <Filter id="content-area" />
        <Listings />
      </section>

      </div>
    );
  }

}
