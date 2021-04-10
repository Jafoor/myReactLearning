import React from 'react';

const Skills = (props) => (

    <div className='Skills'>
                   <h3>Skills: </h3>
                   <ul>
            <li>{props.skilla}</li>
            <li>{props.skillb}</li>
            <li>{props.skillc}</li>
                   </ul>
               </div>
);

export default Skills;