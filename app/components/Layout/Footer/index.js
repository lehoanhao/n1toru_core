import React from 'react';
import { FormattedMessage } from 'react-intl';
import LocaleToggle from 'containers/LocaleToggle';
import { Layout } from 'antd';
import messages from './messages';
const { Footer } = Layout;
function MyFooter() {
  return (
    <Footer style={{ textAlign: 'center' }}>
      <section>
        <LocaleToggle />
      </section>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: 'HaoLH',
          }}
        />
      </section>
    </Footer>
  );
}

export default MyFooter;
