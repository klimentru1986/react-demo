import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux/Aux';
import Backdrop from './../Backdrop/Backdrop';

import classes from './Modal.css';

const componentName = props => {
  return (
    <Aux>
      <Backdrop show={props.show} click={props.modalClose} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

componentName.propTypes = {
  show: PropTypes.bool.isRequired
};

export default componentName;
