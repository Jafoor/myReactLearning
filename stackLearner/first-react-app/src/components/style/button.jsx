import React from 'react';
import classes from './style.module.css';

const Button = props => <button  className={ classes.button}{...props} > {props.children} </button>;

export default Button;