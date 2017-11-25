import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

import classes from './SideDrawer.css';

/**
 * Компонент бокового меню для мобильных
 */
const sideDrawer = props => {
  let sideDrawerClasses = [classes.SideDrawer, classes.Close].join(' ');
  if (props.show) {
    sideDrawerClasses = [classes.SideDrawer, classes.Open].join(' ');
  }

  return (
    <Aux>
      <Backdrop show={props.show} click={props.close} />
      <div className={sideDrawerClasses}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
