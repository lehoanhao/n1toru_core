/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Layout } from 'antd';
import GlobalStyle from '../../global-styles';
import MyHeader from '../../components/Layout/Header';
import MyFooter from '../../components/Layout/Footer';
import RouteHandler from './routes';
const { Content } = Layout;
const Header = withRouter(props => <MyHeader {...props} />);

export default function App() {
  return (
    <Layout theme="light">
      <Helmet
        titleTemplate="%s - HaoLH - React.js Boilerplate"
        defaultTitle="HaoLH - React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Content style={{ padding: '0 2%', marginTop: 64 }}>
        <div
          style={{
            background: '#fff',
            padding: 24,
            minHeight: 380,
            marginTop: 15,
          }}
        >
          <RouteHandler />
        </div>
      </Content>
      <MyFooter />
      <GlobalStyle />
    </Layout>
  );
}
