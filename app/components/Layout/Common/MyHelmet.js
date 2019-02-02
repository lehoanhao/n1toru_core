import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
export const MyHelmet = props => {
  const { id } = props;

  return (
    <div>
      <FormattedMessage id={`menu.${id}`}>
        {title => (
          <Helmet>
            <title>{title}</title>
          </Helmet>
        )}
      </FormattedMessage>
      {/* <FormattedMessage id={`description.${id}`}>
            {description => 
            <Helmet>
              <meta
              name="description"
              content={description}
            />
              </Helmet>
            }
          </FormattedMessage> */}
    </div>
  );
};

MyHelmet.propTypes = {
  id: PropTypes.string,
};
