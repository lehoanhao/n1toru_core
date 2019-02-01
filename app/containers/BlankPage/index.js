import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default class BlankPage extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Blank Page</title>
          <meta name="description" content="Blank page of React.js" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}
