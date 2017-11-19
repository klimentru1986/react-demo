import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css';

/** Лайоут с тулбаром и основным контентом */
class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  /** Открытие/закрытие мобильного меню */
  toggleSideDrawerHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar toggleSideDrawer={this.toggleSideDrawerHandler} />
        <SideDrawer show={this.state.showSideDrawer} close={this.toggleSideDrawerHandler} />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
