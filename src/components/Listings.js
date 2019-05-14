import React, { Component } from 'react';

import '../styles/style.css';

export default class Listings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Sergio'
    };
  }
//4:07 minutes
  render() {
    return(
      <section className="listings">

        <section className="search-area">

        </section>

        <section className="sort-by">

        </section>

        <section className="listings-results">

        </section>

        <section className="pagination">

        </section>

      </section>
    );
  }

}
