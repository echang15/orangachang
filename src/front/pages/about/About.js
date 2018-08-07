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
        <h1>About Us</h1>
        There's actually not much to say. I'm just a Software Engineer who likes brewing a little too much.

        Frequent Brewing Partners <br />
        Rob

        <h1>About The Brewery</h1>

        We have a pretty simple setup. We run a 30amp 5500W electric brew-in-a-bag setup. This is controlled via a homemade installation of CraftPeerPi v2.


        CraftBeerPi - http://www.craftbeerpi.com
      </div>
    );
  }
  // #endregion
}

export default About;
