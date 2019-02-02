/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { FormattedMessage, formatMessage } from 'react-intl';
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
// import messages from './messages';
import { loadKanjis } from './actions';
import reducer from './reducer';
import saga from './saga';
import './style.css';
import './styles.less';
import { getKanjiMeanSingle } from '../../utils/dataCommon';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
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
    });
    history.push(`#${page}`);
  };

  render() {
    const { loading, kanjis } = this.props;
    return (
      <article>
        <div>
          <List
            grid={{
              gutter: 10,
              xs: 2,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 5,
              xxl: 8,
            }}
            dataSource={kanjis}
            loading={loading}
            renderItem={item => (
              <List.Item>
                <Card className="kanji-card" hoverable="true" bordered>
                  <Skeleton loading={loading} active>
                    <List.Item.Meta
                      title={item.value.kanji}
                      description={getKanjiMeanSingle(item.value.mean)}
                    />
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
  onLoadKanjis: PropTypes.func,
  location: PropTypes.object,
  history: PropTypes.object,
  kanjis: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
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
