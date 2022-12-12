import React, { Component } from 'react';
import person from './components/person folder/Person';
import Person from './components/person folder/Person';


class App extends Component {
    state = { 
        person: [
            {firstname:'sina',age:12},
            {firstname:'mmd',age:8},
            {firstname:'salar',age:3}
        ]
    } 

    handle = () => {
        this.setState({
            person: [
                {firstname:'fvdxdv',age:12},
                {firstname:'mvdsadwmd',age:8},
                {firstname:'sereyalar',age:3}
            ]
        });

    }
    render() { 
        const {person}=this.state;
        return (
            <div>
                <h1>hi</h1>

              {person.map(person => (
                <Person firstname={person.firstname} age={person.age} />
              ))} 
              <button onClick={this.handle}>change it</button>
            </div>
        );
    }
}

export default App;



