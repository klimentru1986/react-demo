import React from 'react';

import classes from './Burger.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { ingredientsList } from './BurgerIngredient/ingredients.const';

const burger = props => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient ingredient={ingredientsList.breadTop} />
      <BurgerIngredient ingredient={ingredientsList.cheese} />
      <BurgerIngredient ingredient={ingredientsList.salad} />
      <BurgerIngredient ingredient={ingredientsList.breadBottom} />
    </div>
  );
};

export default burger;
