
// @flow

// #region imports
import compose from 'recompose/compose';
import Beers from './Beers';
import withEnterAnimation from '../../hoc/withEnterAnimation';
// #endregion

export default compose(withEnterAnimation(/* no option yet */))(Beers);