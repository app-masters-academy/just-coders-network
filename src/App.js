import React, {Component} from 'react';
import Header from './components/header/';
import PostForm from'./components/post/PostForm';
import Post from './components/post/Post';
import {styles, colors} from './styles/styles';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <PostForm />
                <Post />
                <Post />
            </div>
        );
    }
}

export {styles};
export default App;
