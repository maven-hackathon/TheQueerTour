/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import './Tour.scss';
import Link from '../Link';

function Tour() {
  return (
    <header className="bar bar-nav bar-nav-expanded">
      <button className="btn btn-link btn-nav pull-left">
        <span className="icon icon-bars"></span>
      </button>
      <span className="label">Next:</span>
      <h1 className="title">Landmark Name</h1>
      <span className="address">123 Castro St.</span>
    </header>
  );
}


export default Tour;
