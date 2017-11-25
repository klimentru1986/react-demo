import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.css';

const button = props => (
  <button className={[classes.Button, classes[props.btnType]].join(' ')} onClick={props.clicked}>
    {props.children}
  </button>
);

button.PropTypes = {
  btnType: PropTypes.string.isRequired
};

export default button;
