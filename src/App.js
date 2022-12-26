import React, { Component } from 'react';

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
                <Persons
                    persons={this.state.persons}
                    personDelete={this.personDelete}
                    personEdit={this.personEdit}
                />
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
                    <Header
                    // personsLength={this.state.persons.length}
                    // appTitle={this.state.appTitle}
                    />

                    <div className='mb-2 p-2'>
                        <form className='form-inline justify-content-center' onSubmit={event => event.preventDefault()}>
                            <div className='input-group w-25'>
                                <input
                                    className='form-control'
                                    placeholder='یه اسم بهم بده !'
                                    type="text" onChange={this.setPerson}
                                    value={this.state.person} />
                                <div className='input-group-append'>
                                    <button
                                        onClick={this.newPerson}
                                        className='btn btn-success  fa fa-plus-circle '></button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {person}
                    <button
                        onClick={this.handle}
                        className={this.state.showPersons ? 'btn btn-danger' : 'btn btn-primary'}>نمایش </button>
                </div>
            </SimpleContext.Provider>
        );
    }
}


export default App;

//......................