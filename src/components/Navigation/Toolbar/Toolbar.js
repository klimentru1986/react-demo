import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';

import classes from './Toolbar.css';

const toolbar = propst => (
  <header className={classes.Toolbar}>
    <div>Меню</div>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
