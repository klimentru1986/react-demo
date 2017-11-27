import React, { Component } from 'react';
import axios from '../../../axios-order';
import { withRouter } from 'react-router-dom';

import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';
import { btnTypes } from '../../../constants/btnTypes.const';

import classes from './ContactData.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  };

  orderHander = event => {
    event.preventDefault();

    this.setState({
      loading: true
    });

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
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
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ loading: false });
        console.error(error);
      });
  };

  render() {
    let form = (
      <form>
        <input type="text" name="name" placeholder="Имя" />
        <input type="text" name="email" placeholder="Электронная почта" />
        <input type="text" name="street" placeholder="Улица" />
        <input type="text" name="postal" placeholder="Индекс" />
        <Button btnType={btnTypes.success} clicked={this.orderHander}>
          Заказать
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Введите контактные данные</h4>
        {form}
      </div>
    );
  }
}

export default withRouter(ContactData);
