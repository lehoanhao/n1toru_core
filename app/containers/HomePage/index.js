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
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { List, Card, Skeleton, Pagination } from 'antd';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectKanjis,
} from 'containers/HomePage/selectors';
import messages from './messages';
import { loadKanjis } from './actions';
import reducer from './reducer';
import saga from './saga';
import './style.css';
/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
  }
  
  componentDidMount() {
    const { hash } = this.props.location;
    const page = hash ? hash.replace('#', '') - 1 : 0;
    this.setState({
      page: page + 1,
    });
    this.props.onLoadKanjis(page);
  }

  handleChangePage = page => {
    const { history } = this.props;
    this.setState({
      page,
    })
    history.push(`#${page}`);
  };

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
            loading={loading}
            renderItem={item => (
              <List.Item>
                <Card className="kanji-card">
                  <Skeleton loading={loading} active>
                    <List.Item.Meta
                      title={item.value.kanji}
                      description={item.description}
                    />
                    {item.value.mean}
                  </Skeleton>
                </Card>
              </List.Item>
            )}
            footer={
              <Pagination
                showQuickJumper
                current={this.state.page}
                total={12}
                defaultPageSize={1}
                onChange={this.handleChangePage}
              />
            }
          />
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onLoadKanjis: PropTypes.func,
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onLoadKanjis: page => dispatch(loadKanjis(page)),
    },
    dispatch,
  );

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
