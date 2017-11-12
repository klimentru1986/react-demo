import React from 'react';

import classes from './BuildControls.css';

import { controlsList } from '../../constants/controls.const';
import BuildControl from './BuildControl/BuildControl';

const buildControls = props => {
  return (
    <div className={classes.BuildControls}>
      {controlsList.map(control => {
        return (
          <BuildControl key={control.key} label={control.label} ingredient={control.ingredient} />
        );
      })}
    </div>
  );
};

export default buildControls;
