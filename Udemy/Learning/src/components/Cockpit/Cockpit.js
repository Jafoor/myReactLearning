import React, {useEffect} from 'react';
import classes from './Cockpit.module.css';


const Cockpit = (props) => {


      useEffect( () => {
        console.log('[Cockpit.js] useEffect ');

        setTimeout( () => {
          alert('Saved data to cloud!');
        }, 1000);
        return () => {
          //clearTimeout(timer);
          console.log('[Cockpit.js] cleanup work in useEffect');
        }
      }, []) // [] for only first time loading

    useEffect( () => {
      console.log('[Cockpit.js] 2nd useEffect ');
      return () => {
        console.log('[Cockpit.js] cleaning up 2nd useEffect');
      }
    })
    
    const assignedClassed = [];
    let btnClass = '';
    if(props.persons.length <= 2){
      assignedClassed.push(classes.red);
    }if(props.persons.length <= 1){
      assignedClassed.push(classes.bold);
    }
    if (props.showPersons){
        btnClass = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
        <h1 className={assignedClassed.join(' ')}> This is Test </h1>
        <button className={btnClass} onClick={props.clicked}> Change Name </button>
        </div>
    )
};

export default Cockpit;