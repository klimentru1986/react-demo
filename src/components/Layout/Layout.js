import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import classes from './Layout.css';

/** Лайоут с тулбаром и основным контентом */
const layout = props => {
  return (
    <Aux>
      <div className={classes.ToolBar}>ToolBar, Sidebar</div>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
