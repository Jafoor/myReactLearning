import React from 'react';
import Form from './signupFormOnly.jsx'
import PropTypes from 'prop-types';

const initValues = {
    name: '',
    email: '',
    password: '',
    birthDate: '',
    gender: ''
};

class SignupForm extends React.Component {

    state = {
        values : initValues,
        agreement: false,
        errors: {}
    };

    handleChange = event => {
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name]: event.target.value
            }
        })
    };

    handleAgreement = event => {
        this.setState({
            agreement: event.target.checked
        })
    };

    handleSubmit = event =>{
        event.preventDefault();
        
        const { isValid, errors} = this.validate();

        if(isValid){
            this.props.createUser(this.state.values);
            event.target.reset();
            this.setState({values: initValues, agreement: false, errors: {}});
        } else{
            this.setState({ errors });
        }
    };

    validate = () => {
        const errors = {};
        const { values: {name, email, password, birthDate, gender}} = this.state;

        if(!name){
            errors.name = 'Please provide Your Name';
        }

        if(!email){
            errors.email = 'Please provide Your Email';
        }

        if(!password){
            errors.password = 'Please provide Your Password';
        }

        if(!birthDate){
            errors.birthDate = 'Please provide Your BirthDate';
        }

        if(!gender){
            errors.gender = 'Please select Your Gender';
        }

        return{
            errors,
            isValid: Object.keys(errors).length === 0
        }
    }



    render() {
        return (
            <div>
                <h1> Signup Form </h1>
                <Form
                    values={this.state.values}
                    agreement={this.state.agreement}
                    errors={this.state.errors}
                    handleChange={this.handleChange}
                    handleAgreement={this.handleAgreement}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

SignupForm.propTypes = {
    createUser: PropTypes.func.isRequired
}

export default SignupForm;