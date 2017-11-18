import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Aux/Aux';

import { ingredientsNamesRu } from '../../constants/ingredients.const';

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients)
    .filter(key => props.ingredients[key] !== 0)
    .map(key => {
      return (
        <li key={key}>
          <span>{ingredientsNamesRu[key]}</span>: {props.ingredients[key]}
        </li>
      );
    });

  return (
    <Aux>
      <h3>Ваш заказ</h3>
      <p>Вкуснейший бургер со следующими ингридиентами:</p>
      <ul>{ingredientSummary}</ul>
      <p>Продолжить?</p>
    </Aux>
  );
};

orderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired
};

export default orderSummary;
