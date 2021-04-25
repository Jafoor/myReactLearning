import React from 'react';
import './App.css';
import Person from './Person/Person';
class App extends React.Component {

  state = {
    persons : [
      {name : "Jafor", age: "22"},
      {name : "Ahsan", age: "24"},
      {name : "Somiha", age: "23"},
    ],
    showPerson: false
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

  togglePersonHandler = () => {
    this.setState({showPerson: !this.state.showPerson})
  }
  render(){

    const style = {
      backgroundColor : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let person = null;
    if(this.state.showPerson){
      person = (
        <div>
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
      )
      
    }
    return (
      <div className="App">
        <h1> This is Test </h1>
        <button style={style} onClick={this.togglePersonHandler}> Change Name </button>
        
        {person}
              
        
      </div>
    );
  }
  
}

export default App;
