import React from 'react';
import classes from './style.module.css';

class App extends React.Component {


    state = {
        name : ''
    };
    handleButtonClick = (event) => {
        console.log(event);
    };

    handleChange = event => {
        this.setState({name: event.target.value})
        console.log(event.target.value);
    };

    handleFocus = event => {
        console.log('I am Focused');
    };

    handleBlured = event => {

        if(!this.state.name){
            alert('type your name');
        }
        
    }

    render() {
        
        return(
            <div className = {classes.Wapper}>
                
                <h1 className={classes.Heading}>Events in React</h1>

                <button className={classes.Btn} onClick={this.handleButtonClick}> Click Me </button>
                <br/>
                <input  onChange={this.handleChange} className={classes.TextField} 
                type="text" 
                value={this.state.name} 
                placeholder='Enter some text'
                onFocus={this.handleFocus}
                onBlur={this.handleBlured} />
                <br/>
                <br/>
                {this.state.name &&  <h3>Welcome, {this.state.name} </h3> }
            </div>
        );
    }

}

export default App;


/**
 * What is event?
 * - Event is an object which only triggers when something special happens and returns an object to
 * the listener which contains information related to that event. 
 * 
 * Ex: Button click, Input Element, Form Submission, Mouse Enter, Mouse Leave
 * 
 * Note: Event is the only way to interact with user and get users feedback
 * 
 * Every Event Has-
 * 
 *      - Name
 *      - Listener Function
 */