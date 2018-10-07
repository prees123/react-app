import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        name: 'Preejith',
        age: 39
      },
      {
        name: 'Resmi',
        age: 30
      }
    ],
    otherState: 'Some other'
  }

  switchName = (newName) => {
    this.setState({
      persons: [
        {
          name: newName, age: 39
        },
        {
          name: 'Resmi Radhakrishnan', age: 38
        }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {
          name: 'Preejith Ponneth', age: 39
        },
        {
          name: event.target.value, age: 38
        }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>This is my first react app!</h1>
        <p>Good Job!!!</p>
        <button onClick={() => this.switchName('Preejith Ponneth')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchName.bind(this, 'Preejith!!!!')}
        changed={this.nameChangeHandler}
        >My wife</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Some Text'));
  }
}

export default App;
