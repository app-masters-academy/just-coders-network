import React, {Component} from 'react';
import {getPost} from '../../utils/database';
import Post from './Post';
import loadingImage from "../../assets/Ellipsis-2.1s-200px.gif";

class PostView extends Component {
    constructor(){
        super();
        this.state = {
            post: null,
            loading: true,
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
        console.log('PostView props >', this.props);
        console.log('PostView state >', this.state);
        if(this.state.loading){
            return <img src={loadingImage}/>
        }
        return (
            <div>
                <Post post={this.state.post}/>
                <p>Aqui vai ter alguns comentarios</p>
            </div>
        );
    }
}

export default PostView
