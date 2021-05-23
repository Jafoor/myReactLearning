import React from 'react';
import Menu from './Menu';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import {Route, Redirect, Switch} from 'react-router-dom';

const Body = () => {
    return (
        <div>
       
           <Route path="/" exect component={Home}/>
           <Route path="/menu" exect component={Menu}/>
           <Route path="/about" exect component={About}/>
           <Route path="/Contact" exect component={Contact}/>
           <Redirect from="/" to ="/home"/>

       
        </div>
    )
}
export default Body;