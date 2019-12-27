import React from 'react';
import './person.css';

const Person = (props) => {
    return (
        <div className="person">
            <p onClick={props.click}>I am {props.name} a person and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default Person;