import React from 'react';
import PropTypes from 'prop-types';

import classes from './BuildControl.css';

const buildControl = props => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.Less} onClick={props.removeIngredient} disabled={props.isDisabled}>
        -
      </button>
      <button className={classes.More} onClick={props.addIngredient}>
        +
      </button>
    </div>
  );
};

buildControl.propTypes = {
  label: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  addIngredient: PropTypes.func.isRequired,
  removeIngredient: PropTypes.func.isRequired
};

export default buildControl;
