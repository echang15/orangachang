// @flow

// #region imports
import React, { PureComponent } from 'react';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
// #endregion

// #region flow types
type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,

  ...any,
};
type State = any;
// #endregion

class About extends PureComponent<Props, State> {
  // #region lifecycle
  render() {
    return (
      <div>
        <div class="row my-4">
        <div class="col-lg-8">
          <img class="img-fluid rounded" src="http://placehold.it/900x400" alt="" />
        </div>
        <div class="col-lg-4">
          <h1>About Us</h1>
          <p>There is actually not too much to say. I am just a Software Engineer who likes brewing a little too much.</p>
          <h1>Why All This?</h1>
          <p>Why spend all this time making a site for a simple homebrew operation? Well, this is a learning exercise in learning new technologies, specifically Amazon Web Services (API Gateway, DynamoDB, Lambda, IAM, Chalice), and Webpack/Node</p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h2 class="card-title">Brewery</h2>
              <p class="card-text">We have a pretty simple setup. We run a 30amp 5500W electric brew-in-a-bag setup. This is controlled via a homemade installation of CraftBeerPi.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h2 class="card-title">Collaborators</h2>
              <p class="card-text">
                My awesome friend and co-brewer Rob Riedel <br />
                Knights Hockey <br />

              </p>
            </div>            
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h2 class="card-title">Credits</h2>
              <p class="card-text">
                Awesome Logo by Caitlin Olszewski - <a target="_blank" href="https://www.caitlinolszewski.com">https://www.caitlinolszewski.com/</a> <br />
                CraftBeerPi - www.CraftBeerPi
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
  // #endregion
}

export default About;
