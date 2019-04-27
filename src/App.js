import React, {Component} from 'react';
import {Row, Col} from 'react-flexbox-grid';
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
        createPost(post).then(savedPost => {
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
                <PostForm onSendButton={this.addPostOnList.bind(this)}/>
                {!this.state.posts
                    ? <img src={loadingImage}/>
                    : <Row>
                        {this.state.posts.map((post) => {
                            return (
                                <Col xs={4}>
                                    <Post
                                        onButtonClick={() => this.props.history.push('/post/' + post.id)}
                                        key={post.id}
                                        post={post}
                                    />
                                </Col>
                            )
                        })}
                    </Row>
                }

            </div>
        );
    }
}

export default App;
