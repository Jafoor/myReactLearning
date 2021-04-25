import React from 'react';
import './UserOutput.css';
const UserOutput = (props) => {
    return (
        <div className='UserOutput'>
            <p>UserName: {props.name}</p>
            <p>Write Later</p>
        </div>
    )
};

export default UserOutput;