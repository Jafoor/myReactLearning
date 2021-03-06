import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
//import { Link } from 'react-router-dom';
import './Posts.css';

class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        console.log(this.props);
        axios.get('/posts')
        .then(response => {
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Max'
                }
            })
            this.setState({posts: updatedPosts})
        }).catch(error => {
            console.log(error);
            //this.setState({error: true})
        });
    }

    postSelectedHandler = (id) => {
        //this.setState({selectedPostId: id})
        this.props.history.push({pathname : this.props.match.url + '/' + id})
    }
    render () {
        let posts = <p style={{textAlign: 'center'}}> Something went Wrong! </p>
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return (
                //<Link to = {'/posts/' + post.id } key={post.id} >
                <Post
                 title={post.title}
                 key={post.id}
                  author={post.author}
                  clicked = { () => this.postSelectedHandler(post.id) } />
                //  </Link>)
                )
            });
        }

        return (
            <div>
                <section className="Posts">
                        {posts}
                </section>
                <Route path={ this.props.match.url + '/:id'} exact component = {FullPost} />
            </div>
            
        );
    }
}

export default Posts;