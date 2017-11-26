import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import classes from './CheckoutSummary.css';

const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Ваш бургер!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger">Отмена</Button>
      <Button btnType="Success">Продолжить</Button>
    </div>
  );
};

export default checkoutSummary;