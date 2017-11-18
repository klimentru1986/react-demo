import React from 'react';
import PropTypes from 'prop-types';

import classes from './BuildControls.css';

import { controlsList } from '../../constants/controls.const';
import BuildControl from './BuildControl/BuildControl';

/** Компонент формы для заказа бургера */
const buildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Цена <strong>{props.price.toFixed(2)}</strong> Р
      </p>
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
      <button className={classes.OrderButton} onClick={props.ordered} disabled={!props.purchasable}>
        ЗАКАЗАТЬ
      </button>
    </div>
  );
};

buildControls.propTypes = {
  price: PropTypes.number.isRequired,
  disabledInfo: PropTypes.object.isRequired,
  purchasable: PropTypes.bool.isRequired
};

export default buildControls;
