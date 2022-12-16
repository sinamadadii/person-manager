import React from 'react';
import Person from './Person';

const Persons = ({ persons }) => {
    return (
        <div>
            {persons.map(person => (
                <Person
                    key={person.id}
                    firstname={person.firstname}
                    age={person.age}
                    deletePerson={() => deletePerson(person.id)} />
            ))}
        </div>
    );
}

export default Persons;


