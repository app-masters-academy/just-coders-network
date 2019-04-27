import React, {Component} from 'react';
import {getPost} from '../../utils/database';

class PostView extends Component {
    constructor(){
        super();
        this.state = {
            post: null,
            loading: false,
            error: null
        }
    }

    componentDidMount(){
        const id = this.props.match.params.postId;
        this.setState({loading: true});
        getPost(id).then(post => {
            this.setState({post: post, loading: false});
        }).catch(error => {
            this.setState({error: error, loading: false});
        })
    }

    render() {
        console.log('this.props);
        console.log(this.state);
        return (
            <div>
                <p>Aqui vai ter um post</p>
                <p>Aqui vai ter alguns comentarios</p>
            </div>
        );
    }
}

export default PostView
