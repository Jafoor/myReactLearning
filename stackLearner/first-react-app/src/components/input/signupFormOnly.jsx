import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './signupTextInput.jsx';



const Form = ({values, handleChange, agreement, handleAgreement, errors, handleSubmit}) => (
    <form action="" onSubmit={handleSubmit}>
                <TextInput 
                    className='form-group my-2'
                    type="text"
                    label='Enter Name'
                    value={values.name}  
                    name = 'name'
                    error={errors.name}
                    placeholder='Your name' 
                    onChange={handleChange} 
                />

                <TextInput 
                    className='form-group my-2'
                    type="email"
                    label='Enter Email'
                    value={values.email}  
                    name = 'email'
                    error={errors.email}
                    placeholder='Your email' 
                    onChange={handleChange} 
                />

                <TextInput 
                    className='form-group my-2'
                    type="password"
                    label='Enter Password'
                    value={values.password}  
                    name = 'password'
                    error={errors.password}
                    placeholder='*****' 
                    onChange={handleChange} 
                />

                <TextInput 
                    className='form-group my-2'
                    type="date"
                    label='Enter Birthdate'
                    value={values.birthDate}  
                    name = 'birthDate'
                    error={errors.birthDate}
                    onChange={handleChange} 
                />

                <div className='form-group'>
                    <label htmlFor="">
                        <input 
                        className='form-control my-2'
                        type="radio"
                        name='gender'
                        value='Male'
                        onChange={handleChange}
                        />
                        Male
                    </label>

                    <label htmlFor="">
                        <input 
                        className='form-control my-2'
                        type="radio"
                        name='gender'
                        value='Female'
                        onChange={handleChange}
                        />
                        Female
                    </label>
                    {errors.gender && <div className='invalid-feedback'> {errors.gender} </div>}
                </div>

                <div className='form-group'>
                    <label htmlFor="">
                        <input type="checkbox" name='agreement' value={agreement} onChange={handleAgreement}/>
                    I Agree
                    </label>
                </div>

                <button type='submit' disabled={!agreement}> Submit </button>
                </form>
)

Form.propsType = {
    values: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleAgreement: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired

}

export default Form;