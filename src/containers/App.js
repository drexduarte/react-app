import React, { PureComponent } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import wrapWithClass from '../hoc/wrapWithClass';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);

    //Old projects
    // this.state = {
    //   persons: [
    //     { id: 1, name: 'John', age: 29 },
    //     { id: 2, name: 'Bob', age: 28 },
    //     { id: 3, name: 'Christine', age: 27 }
    //   ],
    //   showPersons: false
    // }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate()');
  }

  state = {
    persons: [
      { id: 1, name: 'Jon', age: 29, imgUrl: 'https://avatarfiles.alphacoders.com/105/105135.jpg' },
      { id: 2, name: 'Bob', age: 28, imgUrl: 'https://lh3.googleusercontent.com/AJHhKUSDe41J_zLZpYnMfUcxsPEskao3UVnovKDEEbNGscZKPsa17cmU75fqzePM4ieessg0wD2-ncpOcNA'},
      { id: 3, name: 'Christine', age: 27, imgUrl: 'https://react-bootstrap.github.io/thumbnail.png' }
    ],
    showPersons: false,
    toggleClicked: 0
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState( {
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) =>{
      return { 
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1 
      }
     });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    console.log('[App.js] Inside render()');

    let persons = null;

    if( this.state.showPersons ){
      persons = (
        <Persons persons={ this.state.persons }
          clicked={ this.deletePersonHandler }
          changed={ this.nameChangedHandler }/>
      );
    }


    return (
      <React.Fragment>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit appTitle={ this.props.title }
          showPersons={ this.state.showPersons }
          persons={ this.state.persons }
          clicked={ this.togglePersonsHandler }/>
        { persons }
      </React.Fragment>
    );
  }
}

export default wrapWithClass(App, classes.App);
