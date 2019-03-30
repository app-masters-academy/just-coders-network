import React, {Component} from 'react';
import Header from './components/header/';
import PostForm from'./components/post/PostForm';
import Post from './components/post/Post';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <PostForm />
                <Post />
                <Post />
                <Post />
            </div>
        );
    }
}

export default App;
