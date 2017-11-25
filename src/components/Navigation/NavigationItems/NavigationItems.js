import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css';

/**
 * Меню навигации
 */
const navigationItems = props => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active={true}>
        Собрать бургер
      </NavigationItem>
      <NavigationItem link="/">Оплатить</NavigationItem>
    </ul>
  );
};

export default navigationItems;
