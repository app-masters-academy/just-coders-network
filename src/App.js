import React, {Component} from 'react';
import Header from './components/header/';
import PostForm from './components/post/PostForm';
import Post from './components/post/Post';
import {getPosts} from './utils/database';

class App extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        console.log('App mountou!');

    }

    render() {
        return (
            <div style={{padding: 20}}>
                <Header/>
                <PostForm/>
                <Post
                    user_name="Baraky"
                    user_image="https://thenypost.files.wordpress.com/2018/05/180516-woman-mauled-by-angry-wiener-dogs-feature.jpg?quality=90&strip=all&w=618&h=410&crop=1"
                    created_at="Ontem às 19:35"
                    content="Primeiro post nessa rede social muito legal"/>
                <Post
                    user_name="Linus Torvald"
                    user_image="https://dynaimage.cdn.cnn.com/cnn/w_768,h_1024,c_scale/https%3A%2F%2Fdynaimage.cdn.cnn.com%2Fcnn%2Fx_1229%2Cy_0%2Cw_2712%2Ch_3616%2Cc_crop%2Fhttps%253A%252F%252Fstamp.static.cnn.io%252F5b7ac48b4db3d70020c01c13%252Fshutterstock_1081879181.jpg"
                    created_at="Hoje às 17:33"
                    content="Melhor rede social de todas, estou muito feliz!"/>
            </div>
        );
    }
}

export default App;
