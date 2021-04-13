import React from 'react';
import Form from './form.jsx';


class ControledForm extends React.Component {

    state = {
        name : '',
        email : '',
        password : ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault();

        console.log(this.state);
        event.target.reset();
        this.setState({name: '', email: '', password: ''});
    }

    render(){

        return(
            <div>
                <h1>Single Page Form</h1>
                
                <Form
                     values={this.state}
                     handleChange={this.handleChange}
                     handleSubmit={this.handleSubmit}
                />

            </div>
            

            
        )
    }
}

export default ControledForm;


/**
 * npm install prop-types
 * for managing props
 */