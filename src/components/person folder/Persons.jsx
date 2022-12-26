import React, { useContext } from 'react';
import Person from './Person';
import SimpleContext from './../../context/SimpleContext';

const Persons = () => {
    const context = useContext(SimpleContext);
    return (
        //    <SimpleContext.Consumer>
        //        {context => (
        <div>
            {context.persons.map(person => (
                <Person
                    key={person.id}
                    fullName={person.fullName}
                    age={person.age}
                    personDelete={() => context.personDelete(person.id)}
                    personEdit={(event) => context.personEdit(event, person.id)}

                />
            ))}
        </div>
        //        )}
        //    </SimpleContext.Consumer>
    );
}

export default Persons;


