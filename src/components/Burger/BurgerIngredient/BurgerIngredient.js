import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ingredientsList } from './ingredients.const';

import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.ingredient) {
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
  }
}

BurgerIngredient.propTypes = {
  ingredient: PropTypes.string.isRequired
};

export default BurgerIngredient;
