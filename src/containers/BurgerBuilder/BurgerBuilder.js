import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

import { ingredientsPrice, ingredientsHanglerTypes } from '../../constants/ingredients.const';

/** Контейнер сборки и заказа бургера */
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 0,
      cheese: 0,
      salad: 0,
      bacon: 0
    },
    price: 100,
    purchasable: false,
    purchasing: false
  };

  /** Проверка обновления состояния заказа */
  _updatePurchase(ingredients) {
    const ingredientsKeys = Object.keys(ingredients);

    const purchase = ingredientsKeys.map(i => ingredients[i]).reduce((sum, i) => sum + i, 0);

    this.setState({
      purchasable: purchase > 0
    });
  }

  /** Обновление состояния выбраного ингридиента и цены */
  _updateBurgerState = (handlerType, ingredientType) => {
    const oldCount = this.state.ingredients[ingredientType];

    let count, updatedPrice;
    const additionalPrice = ingredientsPrice[ingredientType];

    /** Уменьшение */
    if (handlerType === ingredientsHanglerTypes.remove) {
      count = oldCount - 1;
      updatedPrice = this.state.price - additionalPrice;
    }

    if (count < 0) {
      return;
    }

    /** Увеличение */
    if (handlerType === ingredientsHanglerTypes.add) {
      count = oldCount + 1;
      updatedPrice = this.state.price + additionalPrice;
    }

    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[ingredientType] = count;

    /** Обновление состояние */
    this.setState({
      ingredients: updatedIngredients,
      price: updatedPrice
    });
    this._updatePurchase(updatedIngredients);
  };

  /** Добавление ингридиента */
  addIngredientHandler = type => {
    this._updateBurgerState(ingredientsHanglerTypes.add, type);
  };

  /** Вычитание ингридиента */
  removeIngredientHandler = type => {
    this._updateBurgerState(ingredientsHanglerTypes.remove, type);
  };

  /** Показывает модальное окно */
  purchasingHandler = () => {
    this.setState({
      purchasing: true
    });
  };

  /** Скрывает модальное окно */
  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false
    });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    /** Список заблокированых ингредиентов */
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClose={this.purchaseCancelHandler}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.price}
          disabledInfo={disabledInfo}
          purchasable={this.state.purchasable}
          ordered={this.purchasingHandler}
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
