/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Spin, List, Card, Skeleton } from 'antd';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectLoading,
  makeSelectError,
} from 'containers/HomePage/selectors';
import messages from './messages';
import { loadKanjis } from './actions';
import { makeSelectKanjis } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './style.css';
/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    this.props.onLoadKanjis();
  }

  render() {
    const { loading, error, kanjis } = this.props;

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <div>
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 3,
            }}
            dataSource={kanjis}
            renderItem={item => (
              <List.Item>
                <Card className="kanji-card">
                  <Skeleton loading={loading} active>
                    <List.Item.Meta
                      title={item.value.kanji}
                      description={item.description}
                    />
                    Card content
                  </Skeleton>
                </Card>
              </List.Item>
            )}
          />
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  kanjis: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onChangeUsername: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onLoadKanjis: () => dispatch(loadKanjis()),
  };
}

const mapStateToProps = createStructuredSelector({
  kanjis: makeSelectKanjis(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
