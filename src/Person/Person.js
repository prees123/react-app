import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm {props.name}! {props.age} {props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;