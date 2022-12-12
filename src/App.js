import React, { Component } from 'react';
import Persons from './components/person/Persons';

class App extends Component {
    state = { 
        person: [
            {firstname:'sina',age:12},
            {firstname:'mmd',age:8},
            {firstname:'riza',age:7},
            {firstname:'salar',age:3}
        ]
    } 
    render() { 
        // const {Persons}=this.state;
        return (
            <div>
                <h1>hi</h1>
                <Persons Persons={this.state.Persons} />
            </div>
        );
    }
}

export default App;



