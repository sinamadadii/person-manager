import React from 'react';

const Person = ({ firstname, age, personDelete }) => {
    return (
        <div onClick={personDelete}>
            <h2>{`${firstname} ${age}`}</h2>
        </div>
    );
}

export default Person;




