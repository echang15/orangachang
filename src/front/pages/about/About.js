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
          <p>There is actually not too much to say. I am just a Software Engineer who likes brewing a little too much</p>          
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h2 class="card-title">Brewery</h2>
              <p class="card-text">We have a pretty simple setup. We run a 30amp 5500W electric brew-in-a-bag setup. This is controlled via a homemade installation of CraftBeerPi.</p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary">More Info</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h2 class="card-title">Collaborators</h2>
              <p class="card-text">
                Rob Riedel <br />

              </p>
            </div>            
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h2 class="card-title">Credits</h2>
              <p class="card-text">
                Logo - Caitlin
                CraftPeerPi - www.CraftBeerPi
              </p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary">More Info</a>
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
