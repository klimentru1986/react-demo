import React from 'react';
import PropTypes from 'prop-types';

import classes from './BuildControls.css';

import { controlsList } from '../../constants/controls.const';
import BuildControl from './BuildControl/BuildControl';

const buildControls = props => {
  return (
    <div className={classes.BuildControls}>
      {controlsList.map(control => {
        return (
          <BuildControl
            key={control.key}
            label={control.label}
            addIngredient={() => props.addIngredient(control.ingredient)}
            removeIngredient={() => props.removeIngredient(control.ingredient)}
            isDisabled={props.disabledInfo[control.ingredient]}
            ingredient={control.ingredient}
          />
        );
      })}
    </div>
  );
};

buildControls.propTypes = {
  addIngredient: PropTypes.func.isRequired,
  removeIngredient: PropTypes.func.isRequired,
  disabledInfo: PropTypes.object.isRequired
};

export default buildControls;
