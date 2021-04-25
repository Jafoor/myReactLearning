import React from 'react';

const UserInput = (props) => {

    const style = {
        border: '2px solid red',
    };

    return <input style={style} onChange={props.changed} value={props.name} type='text' />;
};

export default UserInput;