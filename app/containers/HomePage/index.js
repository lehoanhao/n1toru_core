/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { FormattedMessage, formatMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { List, Card, Skeleton, Pagination, Modal, Spin, Row, Col } from 'antd';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectLoading,
  makeSelectLoadingDetail,
  makeSelectError,
  makeSelectKanjis,
  makeSelectKanjiDetail,
  makeSelectKanjiDraw,
} from 'containers/HomePage/selectors';
// import messages from './messages';
import { loadKanjis, loadKanjiDetail, loadKanjiDraw } from './actions';
import reducer from './reducer';
import saga from './saga';
import './style.css';
import './styles.less';
import {
  getKanjiMeanSingle,
  mergeKanjiCompDetail,
  splitKanjiDetail,
  splitKanjiKunOn,
} from '../../utils/dataCommon';
import MyHelmet from '../../components/Layout/Common/MyHelmet';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    const { hash } = this.props.location;
    const page = hash ? hash.replace('#', '') - 1 : 0;
    this.state = {
      visible: false,
      page: page + 1,
    };
    if (props.kanjis || props.kanjis === undefined)
      this.props.onLoadKanjis(page);
  }

  componentDidMount() {}

  showModal = kanji => {
    this.setState({
      visible: true,
    });
    this.props.onLoadKanjiDetail(kanji);
    this.props.onLoadKanjiDraw(kanji);
    fetch('https://data.mazii.net/kanji/05225.svg')
      .then(response => response.text())
      .then(svg => document.body.insertAdjacentHTML('afterbegin', svg));
  };

  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  handleChangePage = page => {
    const { history } = this.props;
    history.replace(`#${page}`);
  };

  renderDetailModal() {
    const { kanjiDetail } = this.props;

    return (
      <Modal
        title={
          kanjiDetail ? `${kanjiDetail.kanji} - ${kanjiDetail.mean}` : 'Loading'
        }
        visible={this.state.visible}
        onCancel={this.handleCancel}
        footer={null}
        className="kanji-detail-modal"
      >
        {kanjiDetail ? (
          <div className="kanji-detail-body">
            <Row>
              <Col span={18}>
                <div>
                  <span className="kanji-detail-title">訓:</span>{' '}
                  {splitKanjiKunOn(kanjiDetail.kun)}
                </div>
                <div>
                  <span className="kanji-detail-title">音:</span>{' '}
                  {splitKanjiKunOn(kanjiDetail.on)}
                </div>
                <div>
                  <span className="kanji-detail-title">Số nét:</span>{' '}
                  {kanjiDetail.stroke_count}
                </div>
                <div>
                  <span className="kanji-detail-title">Bộ thành phần:</span>
                  {mergeKanjiCompDetail(kanjiDetail.compDetail)}
                </div>
              </Col>
              <Col span={6}>{this.props.kanjiDraw}</Col>
            </Row>
            <div>
              <span className="kanji-detail-title">Nghĩa:</span>{' '}
              {splitKanjiDetail(kanjiDetail.detail)}
            </div>
          </div>
        ) : (
          <Spin />
        )}
      </Modal>
    );
  }

  render() {
    const { loading, kanjis } = this.props;
    return (
      <article>
        <MyHelmet id="home" />
        <div>
          <List
            grid={{
              gutter: 15,
              xs: 2,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 5,
              xxl: 15,
            }}
            dataSource={kanjis}
            loading={loading}
            renderItem={item => (
              <List.Item onClick={() => this.showModal(item.value.kanji)}>
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
        {this.renderDetailModal()}
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  onLoadKanjis: PropTypes.func,
  onLoadKanjiDetail: PropTypes.func,
  onLoadKanjiDraw: PropTypes.func,
  location: PropTypes.object,
  history: PropTypes.object,
  kanjis: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  kanjiDetail: PropTypes.object,
  kanjiDraw: PropTypes.element,
};

export const mapDispatchToProps = dispatch => ({
  onLoadKanjis: page => dispatch(loadKanjis(page)),
  onLoadKanjiDetail: kanji => dispatch(loadKanjiDetail(kanji)),
  onLoadKanjiDraw: kanji => dispatch(loadKanjiDraw(kanji)),
});

const mapStateToProps = createStructuredSelector({
  kanjis: makeSelectKanjis(),
  kanjiDetail: makeSelectKanjiDetail(),
  kanjiDraw: makeSelectKanjiDraw(),
  loading: makeSelectLoading(),
  loadingDetail: makeSelectLoadingDetail(),
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
