import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './text-input.jsx';



const Form = props => (
    <form action="" onSubmit={props.handleSubmit}>
                <TextInput 
                    type="text"
                    label='Enter Name'
                    value={props.values.name}  
                    name = 'name'
                    placeholder='Your name' 
                    onChange={props.handleChange} 
                />

                <TextInput 
                    type="email"
                    label='Enter Email'
                    value={props.values.email}  
                    name = 'email'
                    placeholder='Your email' 
                    onChange={props.handleChange} 
                />

                <TextInput 
                    type="password"
                    label='Enter Password'
                    value={props.values.password}  
                    name = 'password'
                    placeholder='*****' 
                    onChange={props.handleChange} 
                />

                

                <button type='submit' > Submit </button>
                </form>
)

Form.propsType = {
    values: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired

}

export default Form;