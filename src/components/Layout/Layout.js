import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css';

/** Лайоут с тулбаром и основным контентом */
class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  /** Закрытие мобильного меню */
  closeSideDrawerHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer show={this.state.showSideDrawer} close={this.closeSideDrawerHandler} />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
