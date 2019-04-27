import React, {Component} from 'react';
import Header from "../header";

class PostView extends Component {
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
