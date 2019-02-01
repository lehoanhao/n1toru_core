/**
 *
 * KanjiPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectKanjiPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class KanjiPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>KanjiPage</title>
          <meta name="description" content="Description of KanjiPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

KanjiPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  kanjiPage: makeSelectKanjiPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'kanjiPage', reducer });
const withSaga = injectSaga({ key: 'kanjiPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(KanjiPage);
