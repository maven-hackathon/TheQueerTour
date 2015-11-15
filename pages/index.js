/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import Splash from '../components/Splash';
import Navigation from '../components/Navigation';
import BottomTab from '../components/BottomTab';

export default class extends Component {

  render() {
    return (
      <div>
        <header className="bar bar-nav">
          <Navigation />
        </header>
        <div className="content">
          <Splash />
        </div>
        <nav className="bar bar-tab">
          <BottomTab />
        </nav>
      </div>
    );
  }

}
