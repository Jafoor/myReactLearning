import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Total Price : <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            type={ctrl.type}
            added={() => props.ingredientAdded(ctrl.type)}
            remove={() => props.ingredientRemove(ctrl.type)}
            disabled = {props.disabled[ctrl.type]}
            />
        ))};
        <button 
        className={classes.OrderButton}
        disabled={!props.purchasable}>ORDER NOW</button>
    </div>
);

export default buildControls;