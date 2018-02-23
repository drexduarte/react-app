import React from 'react';

import classes from './Cockpit.css';

const cockpit = ( props ) => {
  const aClasses = [];
  let btnClass = classes.Button;
  if(props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }
  if(props.persons.length <= 2) {
    aClasses.push( classes.red );
  }

  if(props.persons.length <= 1){
    aClasses.push( classes.bold );
  }

  return (
    <React.Fragment>
      <h1>{ props.appTitle }</h1>
      <p className={ aClasses.join(' ') }>This is really working!</p>
      <button className={ btnClass }
        onClick={ props.clicked }>Toggle Persons</button>
    </React.Fragment>
  );
};

export default cockpit;