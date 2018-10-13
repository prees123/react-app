// Functional component
// import React from 'react';
// import Person from './Person/Person';

// const persons = (props) => props.persons.map((person, index) => {
//     return <Person name={person.name} 
//       age={person.age} 
//       click={() => props.clicked(index)} 
//       key={person.id}
//       changed={(event) => props.changed(event, person.id)} />
//   });

// export default persons;

// class component
import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('[persons.js] inside constructor', props);
    }

    componentWillMount() {
        console.log('[persons.js] inside will mount');
    }

    componentDidMount() {
        console.log('[persons.js] Inside did mount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[Update Persons.js] Inside componentWillRecieveProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Update Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
        return nextProps.persons !== this.props.persons;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[Update Persons.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[Update Persons.js] Inside componentDidUpdate');
    }

    render () {
        console.log('[persons.js] Inside render');
        return this.props.persons.map((person, index) => {
            return <Person name={person.name} 
              age={person.age} 
              click={() => this.props.clicked(index)} 
              key={person.id}
              changed={(event) => this.props.changed(event, person.id)} />
          });
    }
}

export default Persons;