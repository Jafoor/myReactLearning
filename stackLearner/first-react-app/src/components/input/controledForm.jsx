import React from 'react';

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

        const {name, email, password} = this.state
        return(
            <div>
                <h1>Single Page Form</h1>
                <form action="" onSubmit={this.handleSubmit}>
                <input type="text" value={name} className='form-control my-2' name = 'name' placeholder='Your name' onChange={this.handleChange} />

                <input type="email" value={email} className='form-control my-2' name = 'email' placeholder='abujafor@gmail.com' onChange={this.handleChange}/>

                <input type="password" value={password} className='form-control my-2' name = 'password' placeholder='*******' onChange={this.handleChange}/>

                <button type='submit' > Submit </button>
                </form>
                

            </div>
            

            
        )
    }
}

export default ControledForm;