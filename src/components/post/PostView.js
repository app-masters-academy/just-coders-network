import React, {Component} from 'react';
import {getPost} from '../../utils/database';

class PostView extends Component {
    constructor(){
        super();
        this.state = {
            post: null
        }
    }

    componentDidMount(){
        const id = this.props.match.params.postId;
        getPost(id).then(post => {
            this.setState({post: post});
        })
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <p>Aqui vai ter um post</p>
                <p>Aqui vai ter alguns comentarios</p>
            </div>
        );
    }
}

export default PostView
