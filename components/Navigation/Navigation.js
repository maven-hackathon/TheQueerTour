/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import './Navigation.scss';
import Link from '../Link';

var ratchet = require('react-ratchet')

console.log(ratchet)

var Title = require('react-ratchet').Title;
// var NavBar = require('react-ratchet').NavBar;


class MyTitle extends React.Component {
  render() {
    return <new Title>Tripzzz!</Title>
  }
}


// class MyNavBar extends React.Component {
//   render() {
//     return (
//         <NavBar>
//             <Title>Hello World!</Title>
//         </NavBar>
//     );
//   }
// }
// class MyTitle extends React.Component {
//   render() {
//     return <Title>Tripz!</Title>
//   }
// }

function MyNavBar(){
  return(
    <MyTitle />
    // <MyTitle />
    // <NavBar>
    //     Hello World!
    // </NavBar>
  )
}

function Navigation() {
  return (
    <MyNavBar />
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
    </ul>
  );
}
*/

export default Navigation;
