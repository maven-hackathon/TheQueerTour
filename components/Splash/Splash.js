/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import './Splash.scss';

class Splash extends Component {

  render() {
    return (
      <div>
        <div>
          <img className="splash-image" src="/res/Header@2x.png" />
        </div>

        <p className="app-description">
          Welcome to the QUEER tour. Explore the history of the Castro in this interactive walking tour. Youíll learn about the local landmarks and the people who shaped the history of the LGBT community here. This tour includes stops that highlight the impact of queer people of color, women, trans people, and queer youth. The map below highlights the points of interest on this tour.
        </p>

        <img className="splash-image" src="castro-map.png" />

        <p className="app-description additional-b-margin">
          The Castro was one of the first gay neighborhoods in San Francisco and remains one of the most prominent symbols of LGBT community in the world. It is a thriving marketplace for all things gay catered to the people who identify with the LGBT culture. There is also a strong sense of belonging and acceptance that appeals to both locals and tourists alike. Lets get started to learn more about the history of this exciting neighborhood.
        </p>

      </div>
      );
  }

}

export default Splash;
