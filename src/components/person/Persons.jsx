import React from 'react';
import person from './Person';

const Persons = (persons) => {
    return ( 
        <div>
            <h2>
                {Persons.map(Person =>(
                   <Person 
                   firstname={person.firstname}
                   age ={person.age}/>
                ))}
            </h2>
        </div>
     );
}
 
export default Persons;

