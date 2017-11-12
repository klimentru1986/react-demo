import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';

import { ingredientsPrice, ingredientsHanglerTypes } from '../../constants/ingredients.const';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 0,
      cheese: 0,
      salad: 0,
      bacon: 0
    },
    price: 100
  };

  _updateBurgerState = (handlerType, ingredientType) => {
    const oldCount = this.state.ingredients[ingredientType];

    let count, updatedPrice;
    const additionalPrice = ingredientsPrice[ingredientType];

    if (handlerType === ingredientsHanglerTypes.remove) {
      count = oldCount - 1;
      updatedPrice = this.state.price - additionalPrice;
    }

    if (count < 0) {
      return;
    }

    if (handlerType === ingredientsHanglerTypes.add) {
      count = oldCount + 1;
      updatedPrice = this.state.price + additionalPrice;
    }

    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[ingredientType] = count;

    this.setState({ ingredients: updatedIngredients, price: updatedPrice });
  };

  addIngredientHandler = type => {
    this._updateBurgerState(ingredientsHanglerTypes.add, type);
  };

  removeIngredientHandler = type => {
    this._updateBurgerState(ingredientsHanglerTypes.remove, type);
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.price}
          disabledInfo={disabledInfo}
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
