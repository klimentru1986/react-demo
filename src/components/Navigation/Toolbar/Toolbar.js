import React from 'react';

import Logo from '../../Logo/Logo';

import classes from './Toolbar.css';

const toolbar = propst => (
  <header className={classes.Toolbar}>
    <div>Меню</div>
    <Logo />
    <nav>...</nav>
  </header>
);

export default toolbar;
