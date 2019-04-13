import React, {Component} from 'react';
import Header from './components/header/';
import PostForm from './components/post/PostForm';
import Post from './components/post/Post';
import {getPosts, createPost} from './utils/database';
import loadingImage from './assets/Ellipsis-2.1s-200px.gif'

class App extends Component {
    constructor() {
        super();
        this.state = {
            posts: null
        }
    }

    componentDidMount() {
        console.log('App mountou!');

        getPosts().then(posts => {
            this.setState({posts: posts});
        });
    }

    addPostOnList(post) {
        // Salvei no banco de dados
        createPost(post).then(response => {
            console.log(response);
            const savedPost = response.data;
            // Salvei no state
            const posts = this.state.posts || [];
            posts.unshift(savedPost);
            this.setState({posts: posts});
        }).catch(error => {
            console.error(error);
        });
    }

    // {condicao ? se true : se false}

    render() {
        console.log('State do App: ', this.state);
        return (
            <div style={{padding: 20}}>
                <Header/>
                <PostForm onSendButton={this.addPostOnList.bind(this)}/>
                {!this.state.posts
                    ? <img src={loadingImage}/>
                    : this.state.posts.map((post) => {
                        return (
                            <Post
                                key={post.id}
                                user_name={post.user_name}
                                user_image={post.user_image}
                                created_at={post.created_at}
                                content={post.content}
                            />
                        )
                    })}
            </div>
        );
    }
}

export default App;
