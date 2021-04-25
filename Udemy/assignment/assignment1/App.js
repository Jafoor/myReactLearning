import React from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends React.Component {

  state = {
    username: 'Abu Jafor'
  };

  usernameChangeHandle = (event) => {
    this.setState({
      username: event.target.value,
    })
  };
  render() {
    return (
      <div className="App">
       <UserInput name={this.state.username} changed={this.usernameChangeHandle}/>
       <UserOutput name={this.state.username}/>
      </div>
    );
  }
  
}

export default App;
