import React, { Component } from 'react';
import './App.css';
import Book from './components/Book';

class App extends Component {
  state = {
    books: [
      { bookName: "1984", writer: "George Orwell" },
      { bookName: "The Da Vinci Code", writer: "Dan Brown" },
      { bookName: "The Alchemist", writer: "Paulo Coelho" }
    ],
    otherProp: "I am some other Prop"
  }

  changeBookState = () => {
    // Wrong: this.state.books[0].bookName = "1974" 
    this.setState({
      books: [
        { bookName: "Nineteen Eighty-Four", writer: "George Orwell" },
        { bookName: "The Da Vinci Code", writer: "Dan Brown" },
        { bookName: "Metmorphosis", writer: "Franz Kafka" }
      ]
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Book List</h1>
        <button onClick={this.changeBookState}>Change State</button>
        <Book
          bookName={this.state.books[0].bookName}
          writer={this.state.books[0].writer} />
        <Book
          bookName={this.state.books[1].bookName}
          writer={this.state.books[1].writer} />
        <Book
          bookName={this.state.books[2].bookName}
          writer={this.state.books[2].writer} />
      </div>
    );
  }
}

export default App;


// cmd + k + c for comment
// cmd + k + u for uncomment

// another way 
// cmd + / for comment and uncomment



