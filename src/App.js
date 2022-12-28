/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Add from './common/Add';
import Header from './common/Header';
import Persons from './components/person folder/Persons';
import SimpleContext from './context/SimpleContext';

const App = () => {

    const [getPersons, setPersons] = useState([]);
    const [getSinglePerson, setSinglePerson] = useState('');
    const [getShowPersons, setShowPersons] = useState(true);

    //showPerson
    const handle = () => {
        setShowPersons(!getShowPersons)
    }
    const personDelete = id => {
        const persons = [...getPersons];
        const filteredPersons = persons.filter(p => p.id !== id);
        setPersons(filteredPersons);
    }

    const personEdit = (event, id) => {
        const { persons: allPersons } = getPersons;
        const personIndex = allPersons.findIndex(p => p.id === id);
        const person = allPersons[personIndex];
        person.fullName = event.target.value;
        const persons = [...allPersons];
        persons[personIndex] = person;
        setPersons(persons);
    }

    const newPerson = () => {
        const persons = [...getPersons];
        const person = {
            id: Math.floor(Math.random() * 1000),
            fullName: getSinglePerson
        };
        persons.push(person);
        setPersons(persons);
        setSinglePerson("");
        // setPersons(persons);
        // setSinglePerson("");


    }

    const setPerson = event => {
        setSinglePerson(event.target.value);
    }
    let person = null;
    if (getShowPersons) {
        person = (
            <Persons />
        );
    }
    return (
        <SimpleContext.Provider
            value={{
                persons: getPersons,
                person: getSinglePerson,
                handle: handle,
                personDelete: personDelete,
                personEdit: personEdit,
                newPerson: newPerson,
                setPerson: setPerson
            }}>
            <div className='rtl text-center'>
                {/* Alert */}
                <Header appTitle='مدیریت کننده مخاطبین' />
                <Add />
                {person}
                <button
                    onClick={handle}
                    className={getShowPersons ? 'btn btn-danger' : 'btn btn-primary'}>نمایش
                </button>
            </div>
        </SimpleContext.Provider>
    );
}

export default App;