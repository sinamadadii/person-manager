import React from 'react';
import Person from './Person';

const Persons = ({ persons, personDelete }) => {
    return (
        <div>
            {persons.map(person => (
                <Person
                    key={person.id}
                    fullName={person.firstname}
                    age={person.age}
                    personDelete={() => personDelete(person.id)}
                />
            ))}
        </div>
    );
}

export default Persons;


