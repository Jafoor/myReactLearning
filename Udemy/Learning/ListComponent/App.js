import React from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person';
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
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPerson){
      persons = (
        <div>
          { this.state.persons.map( (person, index) => {
            return <Person
            click = {() => this.deleteUserHandler(index)}
            name = {person.name} age={person.age}
            key = {person.id}
            changed = { (event) => this.nameChange( event, person.id)}
            />
          })}
        </div>
      )
      
    }
    return (
      <div className="App">
        <h1> This is Test </h1>
        <button style={style} onClick={this.togglePersonHandler}> Change Name </button>
        
        {persons}
              
        
      </div>
    );
  }
  
}

export default App;
