import React from 'react';

import classes from './Cockpit.css';

const cockpit = ( props ) => {
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.red;
    }
    
    if (props.persons.length <= 2) {
        assignedClasses.push( classes.red );
    }

    if (props.persons.length <= 1) {
        assignedClasses.push( classes.bold );
    }
    return (
        <div className={classes.Cockpit}>
            <h1>This is my first react app!</h1>
            <p className={assignedClasses.join(' ')}>Good Job!!!</p>
            <button
            className={btnClass}
            onClick={props.clicked}>Toggle persons</button>
        </div>
    );
}

export default cockpit;