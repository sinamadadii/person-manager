import React from 'react';
import Person from './Person';

const Persons = ({persons}) => {
    return ( 
        <div>
            
            {persons.map(person =>(
                <Person 
                firstname ={person.firstname}
                age ={person.age} />
            ))}
        </div>
     );
}
 
export default Persons;


