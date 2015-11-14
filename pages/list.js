/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';

export default class extends Component {

  render() {
    return (
      <ul class="table-view">
        <li class="table-view-cell media">
          <a class="navigate-right">
            <img class="media-object pull-left" src="http://placehold.it/42x42">
            <div class="media-body">
              Item 1
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet.</p>
            </div>
          </a>
        </li>
        <li class="table-view-cell media">
          <a class="navigate-right">
            <img class="media-object pull-left" src="http://placehold.it/42x42">
            <div class="media-body">
              Item 1
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet.</p>
            </div>
          </a>
        </li>
        <li class="table-view-cell media">
          <a class="navigate-right">
            <img class="media-object pull-left" src="http://placehold.it/42x42">
            <div class="media-body">
              Item 1
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet.</p>
            </div>
          </a>
        </li>
      </ul>
    );
  }

}
