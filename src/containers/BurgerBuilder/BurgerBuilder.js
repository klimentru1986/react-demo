import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 1,
      cheese: 2,
      salad: 2,
      bacon: 1
    }
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
