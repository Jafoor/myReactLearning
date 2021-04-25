import React from 'react';

const validation = (props) => {

    let validationMsg = '';
    if (props.inputLength > 0 && props.inputLength < 5 ){
        validationMsg = 'Too sort';
    }
    else if(props.inputLength > 5 && props.inputLength < 10 ){
        validationMsg = 'Text is Okay';
    } else if(props.inputLength >= 10){
        validationMsg = 'Text is too Long';
    }
    return (
        <div>
            <p> { validationMsg} </p>
        </div>
    )

};

export default validation;
