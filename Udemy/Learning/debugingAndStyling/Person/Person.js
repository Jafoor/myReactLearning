import React from 'react';
import './Person.css';
import styled from 'styled-components';
//import Radium from 'radium';
const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    }
`;

const person = (props) => {

    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }

    const rnd = Math.random();
    if (rnd > .5){
        throw new Error('Something went wrong')
    }

    return(
        <StyledDiv>
            <p onClick={props.click} > This is a {props.name} and I am {props.age} </p>
             {props.children}
             <input type="text" onChange = {props.changed} value={props.name}/>
        </StyledDiv>
    ); 
}
export default person;