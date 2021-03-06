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
    <div>
      <button className="btn btn-link btn-nav pull-left">
        <span className="icon icon-bars"></span>
      </button>
      <h1 className="title">The Queer Tour</h1>
    </div>
  );
}

/*
function Navigation() {
  return (
    <ul className="Navigation" role="menu">
      <li className="Navigation-item">
        <a className="Navigation-link" href="/" onClick={Link.handleClick}>Home</a>
      </li>
      <li className="Navigation-item">
        <a className="Navigation-link" href="/about" onClick={Link.handleClick}>About</a>
      </li>
      <li className="Navigation-item">
        <a className="Navigation-link" href="/glossary" onClick={Link.handleClick}>Glossary</a>
      </li>
    </ul>
  );
}
*/

export default Navigation;
