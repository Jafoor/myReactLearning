import React from 'react';
import classes from './style.module.css';
import Input from './input/signupForm.jsx';

class App extends React.Component {

    state = {
        users: []
    }

    createUser = user => {
        user.id = new Date().getTime().toString();
        this.setState({
            users: [...this.state.users, user]
        })
    }
    render() {
        
        return(
            <div className = {classes.Wapper}>
               <Input createUser={this.createUser} />
               
               <div>
                   <h3 className="my-5"> All Registered Users: </h3>
                   <ul className='list-group'>
                        {this.state.users.map(user => (<li key={user.id} className='list-group-item'> {user.name} - {user.email} </li>))}
                   </ul>
               </div>


            </div>
        );
    }

}

export default App;


