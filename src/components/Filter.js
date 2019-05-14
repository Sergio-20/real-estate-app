import React, { Component } from 'react';

import '../styles/style.css';

export default class Filter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Sergio'
    };
  }

  render() {
    return(
      <section id="filter">
        <div className="inside">

        <h4>Filter</h4>

        <select name="neighbourhood" className="filters neighbourhood">
          <option>Ridgewood</option>
        </select>
        <select name="house-type" className="filters house-type">
          <option>Ranch</option>
        </select>
        <select name="bedrooms" className="filters bedrooms">
          <option>2 Bedrooms</option>
        </select>

        <div className="filters price">
          <span className="title">Price</span>
            <input type="text" name="min-price" className="min-price" />
            <input type="text" name="max-price" className="max-price" />
        </div>

        <div className="filters floor-space">
          <span className="title">Home Space</span>
            <input type="text" name="min-floor-space" className="min-floor-space" />
            <input type="text" name="max-floor-space" className="max-floor-space" />
        </div>

        <div className="filters extras">
          <span className="title">Extras</span>
          <label html-for="extras">
            <span>Elevators</span>
            <input name="extras" type="checkbox" value="elevators" />
          </label>

          <label html-for="extras">
            <span>Swimming Pool</span>
            <input name="extras" type="checkbox" value="swimming-pool" />
          </label>

          <label html-for="extras">
            <span>Gym</span>
            <input name="extras" type="checkbox" value="gym" />
          </label>

        </div>

        </div>

      </section>
    );
  }

}
