import React from 'react';
import './App.css';
import Person from './Person/Person';
class App extends React.Component {

  state = {
    persons : [
      {name : "Jafor", age: "22"},
      {name : "Ahsan", age: "24"},
      {name : "Somiha", age: "23"},
    ]
  }

  nameChange = (event) => {
    this.setState({
      persons : [
        {name : "Abu Jafor", age: "22"},
        {name : event.target.value, age: "24"},
        {name : "Somiha", age: "23"},
      ]
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
  render(){
    return (
      <div className="App">
        <h1> This is Test </h1>
        <button onClick={ () => this.switchName("Abu Jafor") }> Change Name </button>
        
        <Person name={this.state.persons[0].name} age= {this.state.persons[0].age}/>
        <Person  name={this.state.persons[1].name}
         age= {this.state.persons[1].age}
         click = {this.switchName.bind(this, 'Saleh')}
         changed = {this.nameChange}>
          I am CR 
        </Person>
        <Person name={this.state.persons[2].name} age= {this.state.persons[2].age}>
          <h1>I am from Jashore</h1>
        </Person>
      </div>
    );
  }
  
}

export default App;
