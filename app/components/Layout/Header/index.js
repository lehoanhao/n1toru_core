import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;
/* eslint-disable react/prefer-stateless-function */
class MyHeader extends React.Component {
  componentWillMount() {
    console.log(history)
  }

  render() {
    return (
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['/']}
          selectedKeys={this.state.test}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="/">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/blank">
            <Link to="/blank">Blank</Link>
          </Menu.Item>
          <Menu.Item key="/kanji">
            <Link to="/kanji">Kanji</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default MyHeader;
