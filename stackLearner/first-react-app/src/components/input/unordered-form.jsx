import React from 'react';

class UnorderedForm extends React.Component {

    handleSubmit = event => {
        event.preventDefault();
        const data = {};
        data.name = event.target.name.value;
        data.email = event.target.email.value;
        data.password = event.target.password.value;

        console.log(data);
        event.target.reset();
    }

    render(){
        return(
            <div>
                <h1>Single Page Form</h1>
                <form action="" onSubmit={this.handleSubmit}>
                <input type="text" className='form-control my-2' name = 'name' placeholder='Your name' />

                <input type="email" className='form-control my-2' name = 'email' placeholder='abujafor@gmail.com'/>

                <input type="password" className='form-control my-2' name = 'password' placeholder='*******'/>

                <button type='submit' > Submit </button>
                </form>
                

            </div>
            

            
        )
    }
}

export default UnorderedForm;