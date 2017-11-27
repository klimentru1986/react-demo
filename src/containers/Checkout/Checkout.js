import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0
  };

  componentWillMount() {
    const params = new URLSearchParams(this.props.location.search);

    const price = +params.get('price');
    const ingredients = {
      meat: +params.get('meat'),
      cheese: +params.get('cheese'),
      salad: +params.get('salad'),
      bacon: +params.get('bacon')
    };
    this.setState({ ingredients: ingredients, price: price });
  }

  onCancelHandler = () => {
    this.props.history.push('/');
  };

  onSubmitHandler = () => {
    this.props.history.push('/checkout/contact-data');
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          canceled={this.onCancelHandler}
          submited={this.onSubmitHandler}
        />
        <Route
          path={`${this.props.match.url}/contact-data`}
          render={() => <ContactData ingredients={this.state.ingredients} price={this.state.price} />}
        />
      </div>
    );
  }
}

export default Checkout;
