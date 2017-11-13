import React from 'react';
import PropTypes from 'prop-types';

import { ingredientsList } from '../../../constants/ingredients.const';
import classes from './BurgerIngredient.css';

/** Компонент ингредиента бургера */
const burgerIngredient = props => {
  let ingredient = null;

  switch (props.ingredient) {
    case ingredientsList.breadBottom:
      ingredient = <div className={classes.BreadBottom} />;
      break;

    case ingredientsList.breadTop:
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1} />
          <div className={classes.Seeds2} />
        </div>
      );
      break;

    case ingredientsList.meat:
      ingredient = <div className={classes.Meat} />;
      break;

    case ingredientsList.cheese:
      ingredient = <div className={classes.Cheese} />;
      break;

    case ingredientsList.salad:
      ingredient = <div className={classes.Salad} />;
      break;

    case ingredientsList.bacon:
      ingredient = <div className={classes.Bacon} />;
      break;

    default:
      ingredient = null;
  }

  return ingredient;
};

burgerIngredient.propTypes = {
  ingredient: PropTypes.string.isRequired
};

export default burgerIngredient;
