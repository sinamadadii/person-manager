import React, { Component } from 'react';
import Persons from './components/person folder/Persons';

class App extends Component {
    state = {
        persons: [
            { id: 1, fullName: 'sina', age: 12 },
            { id: 2, fullName: 'mmd', age: 8 },
            { id: 3, fullName: 'salar', age: 3 }
        ],
        showPersons: false
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
    // newPerson = () => {
    //     const persons = [...this.state.persons];
    //     const person = {
    //         id: Math.floor(Math.random(1000))
    //     }

    // }

    render() {

        const style = { textAlign: 'center' }

        const btnstyle = {
            padding: "1em",
            backgroundColor: "yellow"
        }

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
            <div style={style}>
                <h1>مدیریت کننده اشخاص</h1>
                <h3> تعداد اشخاص {this.state.persons.length} نفر میباشد </h3>

                {person}

                <button onClick={this.handle} style={btnstyle}>نمایش اشخاص </button>
            </div>
        );
    }
}


export default App;



//......................