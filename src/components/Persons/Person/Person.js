import React, { Component } from 'react';
import { Button, Glyphicon, Image } from 'react-bootstrap';

import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()');
  }

  componentWillUnmount() {
    console.log('[Person.js] Inside componentWillUnmount()');
  }

  render() {
    console.log('[Person.js] Inside render()');

    return (
      <WithClass classes={ classes.Person }>
        <Button bsStyle='default' className={ classes.btnX } onClick={ this.props.click }>
          <Glyphicon glyph="remove" />
        </Button> 
        <Image src={ this.props.imgUrl } circle />
        <p> I'm { this.props.name }! I am { this.props.age } years old! </p>
        <p>{ this.props.children }</p>
        <input type='text' onChange={ this.props.changed } value={ this.props.name } />
      </WithClass>
    )
  }
}

export default Person;