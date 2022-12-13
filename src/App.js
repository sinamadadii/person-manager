import React, { Component } from 'react';
import Persons from './components/person folder/Persons';

class App extends Component {
    state = { 
        person: [
            {firstname:'sina',age:12},
            {firstname:'mmd',age:8},
            {firstname:'salar',age:3}
        ]
    } 

    render() {
        const style = {textAlign:'center'}
        return (
            <div style={style}>
                <h1>hi</h1>
            <Persons persons={this.state.person} />
            </div>
        );
    }
}

export default App;



