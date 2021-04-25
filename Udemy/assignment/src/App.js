import React from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

/**
 * 1. Create an input field (in App component) with a change listener which outputs the length of the entered text be below it
 * Create a new component (-> ValidationComponent) which receives the test length as prop
 * Inside the ValidationComponent, either output "Text too short" or Text long enough" depending on the text length
 * Create another component (=> ChrComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border:) 1px black
 * Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the input field) as prop
 * when you click a CharComponent, it should be removed the entered text.
 */

class App extends React.Component {

  state = {
    userInput: ''
  };

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedtext = text.join('');
    this.setState({userInput: updatedtext});
  }
  inputChangedHandler = (event) => {
    this.setState({ userInput : event.target.value });
  };

  render() {

    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char character={ch}
       key={index}
       clicked = {() => this.deleteCharHandler(index) }/>
    });
    return (
      <div className="App">
      <input type="text" 
      onChange={this.inputChangedHandler} 
      value={this.state.userInput}
      />
      <p> {this.state.userInput} </p>
      <Validation inputLength={ this.state.userInput.length }/>
      {charList}
      </div>
    );
  }
  
}

export default App;
