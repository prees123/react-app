import React, { Component } from 'react';
import classes from './App.css';

import Person from '../components/Persons/Person/Person';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      {
        id: '1',
        name: 'Preejith',
        age: 39
      },
      {
        id: '2',
        name: 'Resmi',
        age: 30
      },
      {
        id: '3',
        name: 'Pranav',
        age: 10
      }
    ],
    otherState: 'Some other',
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState( {persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person name={person.name} 
              age={person.age} 
              click={() => this.deletePersonHandler(index)} 
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );

      btnClass = classes.red;
    }

    return (
      <div className={classes.App}>
        <h1>This is my first react app!</h1>
        <p>Good Job!!!</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Some Text'));
  }
}

export default App;
