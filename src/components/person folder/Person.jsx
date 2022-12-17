import React from 'react';

const Person = ({ firstname, age, personDelete }) => {
    return (
        <div>
            <h2>{`${firstname} ${age}`}</h2>
            <button onClick={personDelete}>Delete</button>
        </div>
    );
}

export default Person;




