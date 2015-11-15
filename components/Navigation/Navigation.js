/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import './Navigation.scss';
import Link from '../Link';

function Navigation() {
  return (
    <header className="bar bar-nav">
      <button className="btn btn-link btn-nav pull-left">
        <span className="icon icon-bars"></span>
      </button>
      <h1 className="title">TheQueerTour</h1>
    </header>
  );
}


export default Navigation;
