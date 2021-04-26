import React from 'react';
import  classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons : [
      { id:"1",  name : "Jafor", age: "22"},
      { id:"2", name : "Ahsan", age: "24"},
      { id:"3", name : "Somiha", age: "23"},
    ],
    otherState: 'Some other value',
    showPerson: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps ', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate ');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }
  nameChangeHandler = (event, id) => {
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
  
  deleteUserHandler = (index) => {
    //Good Practice
    //const persons = this.state.persons.slice();
    //or
    const persons = [...this.state.persons];

    //const persons = this.state.persons;
    persons.splice(index, 1);
    this.setState({persons: persons});
  }


togglePersonHandler = () => {
  this.setState({showPerson: !this.state.showPerson})
};
  render(){
    console.log('[App.js] render');
    let persons = null;
    if(this.state.showPerson){
      persons = (
        <div>
          <Persons 
          persons={this.state.persons}
          clicked = {this.deleteUserHandler}
          changed = {this.nameChangeHandler} />
        </div>
      );
    }

    return (
      
      <div className={classes.App}>
        <button
        onClick = {() => {
          this.setState({showCockpit: false})
        }}
        >Revove Cockpit</button>
        { this.state.showCockpit ? (<Cockpit
        persons = {this.state.persons}
        showPerson = {this.state.showPerson}
        clicked = {this.togglePersonHandler}
        />) : null}
        {persons}
      </div>
      
    );
  }
  
}

export default App;
