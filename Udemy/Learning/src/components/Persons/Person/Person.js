import React from 'react';
import './Person.css';

class Person extends React.Component {

    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps ', props);
    //     return state;
    //   }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate ');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate ');
        return { message: 'Snapshot!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componeentDidUpdate');
        console.log(snapshot);
    }

    render(){
        console.log('[Personjs] renderng... ');

        return(
            <div className='Person'>
                <p onClick={this.props.click} > This is a {this.props.name} and I am {this.props.age} </p>
                {this.props.children}
                <input type="text" onChange = {this.props.changed} value={this.props.name}/>
            </div>
        ); 
    }

        
}
export default Person;