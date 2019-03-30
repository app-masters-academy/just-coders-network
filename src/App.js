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
                <Post
                    user_name="Baraky"
                    created_at="Ontem às 19:35"
                    content="Primeiro post nessa rede social muito legal"/>
                <Post />
                <Post />
            </div>
        );
    }
}

export default App;
