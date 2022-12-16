import React from 'react';

const Person = ({ firstname, age, deletePerson }) => {
    return (
        <div onClick={{ deletePerson }}>
            <h2>{`${firstname} ${age}`}</h2>
        </div>
    );
}

export default Person;




