import React, { Component } from 'react';
import Person from './components/person folder/Person';
import Persons from './components/person folder/Persons';

class App extends Component {
    state = { 
        person: [
            {id : 1 ,firstname:'sina',age:12},
            {id : 2 ,firstname:'mmd',age:8},
            {id : 3 ,firstname:'salar',age:3}
        ],
        showPersons:false
    } 

    handle = ()=>{
        this.setState({showPersons: !this.state.showPersons})
    }

    render() {

        const style = {textAlign:'center'}

        const btnstyle ={
            padding:"1em",
            backgroundColor:"yellow"
        }

        let Person = null;
        
        if (this.state.showPersons) {
            Person = <Persons persons={this.state.person} />;
        }


        return (
            <div style={style}>
                <h1>مدیریت کننده اشخاص</h1>
                <h3> تعداد اشخاص {this.state.person.length} نفر میباشد </h3>
            
            {Person}

            <button onClick={this.handle} style={btnstyle}>نمایش اشخاص </button>
            </div>
        );
    }
}

export default App;



