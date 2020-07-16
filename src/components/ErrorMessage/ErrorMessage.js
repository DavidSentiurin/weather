import React from 'react';
import classes from './ErrorMessage.module.scss'

const ErrorMessage = (props) => {
  return (
    <div className={(props.className || '') + ` ${classes.error}`}>
      <p className={classes['error-text']}>
        {props.children}
      </p>
    </div>
  );
};

export default ErrorMessage;