/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import messages from './messages';
import './style.css';
import logo from '!file-loader?name=[name].[ext]!../../../assets/images/logo.png';
const { Header } = Layout;
// eslint-disable-next-line react/prefer-stateless-function
class MyHeader extends React.Component {
  handleReturnHome() {
    window.location.href = '/';
  }

  render() {
    const { pathname } = this.props.location;
    return (
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          backgroundColor: 'white',
          padding: '0 2%',
        }}
        theme="light"
      >
        <img
          className="logo"
          src={logo}
          alt="logo"
          onClick={() => {
            this.handleReturnHome();
          }}
          onKeyPress={this.handleReturnHome}
        />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={[pathname]}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="/">
            <Link to="/">
              <FormattedMessage {...messages.home} />
            </Link>
          </Menu.Item>
          <Menu.Item key="/blank">
            <Link to="/blank">
              <FormattedMessage {...messages.blank} />
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default MyHeader;
