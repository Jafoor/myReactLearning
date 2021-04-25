import React from 'react';
import './App.css';
//import Radium, {StyleRoot} from 'radium';
import styled from 'styled-components';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


class App extends React.Component {

  state = {
    persons : [
      { id:"1",  name : "Jafor", age: "22"},
      { id:"2", name : "Ahsan", age: "24"},
      { id:"3", name : "Somiha", age: "23"},
    ],
    showPerson: false
  }

  nameChange = (event, id) => {

    const personIndex = this.state.persons.findIndex( (p) => {
      return p.id === id;
    });

    //const person = this.state.persons[personIndex];
    //Better Approach
    const person = {
       ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState({
      persons : persons
    }

    )
  }
  switchName = (newName) => {
      this.setState({
        persons : [
          {name : "Abu Jafor", age: "22"},
          {name : "Ahsan", age: "24"},
          {name : "Somiha", age: "23"},
        ]
      }

      )
  }

  togglePersonHandler = () => {
    this.setState({showPerson: !this.state.showPerson})
  };

  deleteUserHandler = (index) => {
    //Good Practice
    //const persons = this.state.persons.slice();
    //or
    const persons = [...this.state.persons];

    //const persons = this.state.persons;
    persons.splice(index, 1);
    this.setState({persons: persons});
  }
  render(){

    const style = {
      backgroundColor : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    const classes = [];
    if(this.state.persons.length > 2){
      classes.push('red');
    }
    else{
      classes.push('bold');
    }
    let persons = null;
    if(this.state.showPerson){
      persons = (
        <div>
          { this.state.persons.map( (person, index) => {
            return <ErrorBoundary key = {person.id}> <Person
            click = {() => this.deleteUserHandler(index)}
            name = {person.name} age={person.age}
            
            changed = { (event) => this.nameChange( event, person.id)}
            />
            </ErrorBoundary>
          })}
        </div>
      )
      style.backgroundColor = 'red';
      style[':hover']= {
        backgroundColor: 'green',
        color: 'white',
      }
    };
    return (
      
      <div className="App">
        <h1 className={classes.join(' ')}> This is Test </h1>
        <button style={style} onClick={this.togglePersonHandler}> Change Name </button>
        
        {persons}
      </div>
      
    );
  }
  
}

export default App;
//export default Radium(App);


// radium for styling
// style-component