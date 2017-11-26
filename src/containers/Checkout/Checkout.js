import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  state = {
    ingredients: {
      meat: 0,
      cheese: 1,
      salad: 2,
      bacon: 0
    }
  };

  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search);

    const ingredients = {
      meat: +params.get('meat'),
      cheese: +params.get('cheese'),
      salad: +params.get('salad'),
      bacon: +params.get('bacon')
    };
    this.setState({ ingredients: ingredients });
  }

  onCancelHandler = () => {
    this.props.history.push('/');
  };

  onSubmitHandler = () => {
    console.log('submited');
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          canceled={this.onCancelHandler}
          submited={this.onSubmitHandler}
        />
      </div>
    );
  }
}

export default Checkout;
