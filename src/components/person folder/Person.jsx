import React from 'react';

const Person = ({ fullName, age, personDelete }) => {
    return (
        <div>
            <h2>{`${fullName} ${age}`}</h2>
            <button onClick={personDelete}>Delete</button>
        </div>
    );
}

export default Person;




