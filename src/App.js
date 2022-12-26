import React, { Component } from 'react';
import Add from './common/Add';

import Header from './common/Header';
import Persons from './components/person folder/Persons';
import SimpleContext from './context/SimpleContext';
class App extends Component {
    state = {
        persons: [],
        person: "",
        showPersons: true,
        appTitle: 'مدیریت کننده اشخاص'
    }
    //show
    handle = () => {
        this.setState({ showPersons: !this.state.showPersons })

    }
    personDelete = id => {
        const persons = [...this.state.persons];
        const filteredPersons = persons.filter(p => p.id !== id);
        this.setState({ persons: filteredPersons });
    }

    personEdit = (event, id) => {
        const { persons: allPersons } = this.state;
        const personIndex = allPersons.findIndex(p => p.id === id);
        const person = allPersons[personIndex];
        person.fullName = event.target.value;
        const persons = [...allPersons];
        persons[personIndex] = person;
        this.setState({ persons });
    }

    newPerson = () => {
        const persons = [...this.state.persons];
        const person = {
            id: Math.floor(Math.random() * 1000),
            fullName: this.state.person
        };
        persons.push(person);
        this.setState({ persons, person: "" })
    }

    setPerson = event => {
        this.setState({ person: event.target.value });
    }

    render() {

        let person = null;

        if (this.state.showPersons) {
            person = (
                <Persons />
            );
        }


        return (
            <SimpleContext.Provider
                value={{
                    state: this.state,
                    handle: this.handle,
                    personDelete: this.personDelete,
                    personEdit: this.personEdit,
                    newPerson: this.newPerson,
                    setPerson: this.setPerson
                }}>
                <div className='rtl text-center'>
                    {/* Alert */}
                    <Header />
                    <Add />
                    {person}
                    <button
                        onClick={this.handle}
                        className={this.state.showPersons ? 'btn btn-danger' : 'btn btn-primary'}>نمایش
                    </button>
                </div>
            </SimpleContext.Provider>
        );
    }
}


export default App;

//......................