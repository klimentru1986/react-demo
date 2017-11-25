import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import { ingredientsPrice, ingredientsHanglerTypes } from '../../constants/ingredients.const';

import axios from '../../axios-order';

/** Контейнер сборки и заказа бургера */
class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    price: 150,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    axios
      .get('/ingredients.json')
      .then(response => {
        this.setState({ ingredients: response.data });
      })
      .catch(error => this.setState({ error: true }));
  }

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

  /** Продолжение заказа */
  purchaseContinueHandler = () => {
    this.setState({
      loading: true
    });

    const order = {
      ingredients: this.state.ingredients,
      price: this.state.price,
      deliveryMethod: 'fastest',
      customer: {
        name: 'TestUser',
        email: 'testUser@test.test',
        address: {
          street: 'test street',
          zipCode: '123456',
          country: 'ru'
        }
      }
    };
    axios
      .post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false, purchasing: false });
        console.log(response);
      })
      .catch(error => {
        this.setState({ loading: false, purchasing: false });
        console.error(error);
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

    let burger = this.state.error ? <p>Ошибка в работе сервиса!</p> : <Spinner />;
    let orderSummary = null;

    if (this.state.ingredients) {
      burger = (
        <Aux>
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

      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          price={this.state.price}
          purchaseCancel={this.purchaseCancelHandler}
          purchaseContinue={this.purchaseContinueHandler}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        {burger}
        <Modal show={this.state.purchasing} modalClose={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
