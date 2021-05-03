import React, { Component } from 'react';
//import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponenet';
//import NewPost from './NewPost/NewPost';
//import FullPost from './FullPost/FullPost';
import './Blog.css';

const AsyncNewPost = asyncComponent( () => {
    return import('./NewPost/NewPost')
});

class Blog extends Component {

    state = {
        auth: false
    }

    render () {
        return (
            <div className='Blog'>

                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                             to ="/posts" 
                             exact
                             activeClassName="myactive"
                             //activeStyle={{}}
                              > Home </NavLink></li>
                            <li><NavLink to = {{
                                //pathname: this.props.match.url + '/newpost'
                                pathname: '/newpost',
                                // hash: '#submit',
                                // search: '?quick-submit=true'
                            }}> New Post </NavLink></li>
                        </ul>
                    </nav>
                </header>

                {/* <Route path="/" exact render = {() => <h1>Home</h1>}/>
                <Route path="/"  render = {() => <h1>Home 2</h1>}/> */}
                
                <Switch>
                { this.state.auth ? <Route path='/newpost' exact component = {AsyncNewPost}/> : null }
                <Route path='/posts'  component = {Posts} />
                <Route render= { () => <h1>Not Found</h1>}/>
                <Redirect from='/' to='/posts' />
                </Switch>
                
                
                {/* <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;

//npm install --save react-router react-router-dom
