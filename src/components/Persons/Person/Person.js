// Functional component
// import React from 'react';
// import classes from './Person.css';

// const person = (props) => {
//     return (
//         <div className={classes.Person}>
//             <p onClick={props.click}>I'm {props.name}! {props.age} {props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name} />
//         </div>
//     )
// };

// export default person;

// Class component
import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[person.js] inside constructor', props);
      }
    
      componentWillMount() {
        console.log('[person.js] inside will mount');
      }
    
      componentDidMount() {
        console.log('[person.js] Inside did mount');
      }
    render () {
        console.log('[person.js] inside render');
        return <div className={classes.Person}>
            <p onClick={this.props.click}>I'm {this.props.name}! {this.props.age} {this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name} />
        </div>
    }
}

export default Person;