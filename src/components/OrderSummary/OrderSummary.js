import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Aux/Aux';
import Button from './../UI/Button/Button';

import { ingredientsNamesRu } from '../../constants/ingredients.const';
import { btnTypes } from '../../constants/btnTypes.const';

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
      <Button btnType={btnTypes.danger} clicked={props.purchaseCancel}>
        Отмена
      </Button>
      <Button btnType={btnTypes.success} clicked={props.purchaseContinue}>
        Продолжить
      </Button>
    </Aux>
  );
};

orderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired
};

export default orderSummary;
