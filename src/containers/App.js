// State full component
import React, { Component } from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
    console.log('[App.js] inside constructor', props);
  }

  componentWillMount() {
    console.log('[App.js] inside will mount');
  }

  componentDidMount() {
    console.log('Inside did mount');
  }
  
  // state = {
  //   persons: [
  //     {
  //       id: '1',
  //       name: 'Preejith',
  //       age: 39
  //     },
  //     {
  //       id: '2',
  //       name: 'Resmi',
  //       age: 30
  //     },
  //     {
  //       id: '3',
  //       name: 'Pranav',
  //       age: 10
  //     }
  //   ],
  //   otherState: 'Some other',
  //   showPersons: false
  // }

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
    console.log('Inside render')
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          />;
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Some Text'));
  }
}

export default App;
