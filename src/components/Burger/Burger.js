import React from 'react';

import classes from './Burger.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { ingredientsList } from './BurgerIngredient/ingredients.const';

const burger = props => {
  const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, index) => {
      return <BurgerIngredient ingredient={igKey} key={igKey + index} />;
    });
  });

  console.log(transformedIngredients);

  return (
    <div className={classes.Burger}>
      <BurgerIngredient ingredient={ingredientsList.breadTop} />
      {transformedIngredients}
      <BurgerIngredient ingredient={ingredientsList.breadBottom} />
    </div>
  );
};

export default burger;
