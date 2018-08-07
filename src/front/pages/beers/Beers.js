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

class Beers extends PureComponent<Props, State> {
  // #region lifecycle
  render() {
    return (
      <div>
        <h1>Whats On Tap</h1>
        
        <h1>Upcoming Beers</h1>

        <h1>Planned Beers for the future</h1>        



      </div>
    );
  }
  // #endregion
}

export default Beers;
