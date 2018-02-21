import React from 'react';

import classes from './Cockpit.css';

const cockpit = ( props ) => {
  const aClasses = [];
  let btnClass = '';
  if(props.showPersons) {
    btnClass = classes.Red;
  }
  if(props.persons.length <= 2) {
    aClasses.push( classes.red );
  }

  if(props.persons.length <= 1){
    aClasses.push( classes.bold );
  }

  return (
    <div className={ classes.Cockpit }>
      <h1>Hi, I'm a React App</h1>
      <p className={ aClasses.join(' ') }>This is really working!</p>
      <button className={ btnClass }
        onClick={ props.clicked }>Toggle Persons</button>
    </div>
  );
};

export default cockpit;