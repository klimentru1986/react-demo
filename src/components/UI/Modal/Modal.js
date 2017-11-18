import React from 'react';
import PropTypes from 'prop-types';

import classes from './Modal.css';

const componentName = props => {
  return (
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}
    >
      {props.children}
    </div>
  );
};

componentName.propTypes = {
  show: PropTypes.bool.isRequired
};

export default componentName;
