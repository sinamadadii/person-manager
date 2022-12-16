import React, { Component } from 'react';
import Persons from './components/person folder/Persons';

class App extends Component {
    state = {
        persons: [
            { id: 1, firstname: 'sina', age: 12 },
            { id: 2, firstname: 'mmd', age: 8 },
            { id: 3, firstname: 'salar', age: 3 }
        ],
        showPersons: false
    }

    handle = () => {
        this.setState({ showPersons: !this.state.showPersons })

    }
    deletePerson = id => {
        const persons = [...this.state.persons];
        const filteredPersons = persons.filter(p => p.id !== id);
        this.setState({ persons: filteredPersons });
    }
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
                    deletePerson={this.deletePerson} />);
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