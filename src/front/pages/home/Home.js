// @flow

// #region imports
import React, { PureComponent } from 'react';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import HomeInfo from './styled/HomeInfo';
import MainTitle from './styled/MainTitle';
import LightNote from './styled/LightNote';
// #endregion

// #region flow types
export type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,

  ...any,
};

export type State = any;
// #endregion

class Home extends PureComponent<Props, State> {
  // #region lifecycle
  render() {
    return (
      <div>
        <div class="text-center">
          <img src={require('../../../../images/logo.jpg')} class="img-responsive center-block" />
        </div>
        <Jumbotron>
          <HomeInfo>
            <MainTitle>OrangaChang Brewing Company</MainTitle>
            <p>
              <Link className="btn btn-success btn-lg" to={'/about'}>
                <i className="fa fa-info" />
                &nbsp; About
              </Link>
            </p>
          </HomeInfo>
        </Jumbotron>
      </div>
    );
  }
  // #endregion
}

export default Home;
