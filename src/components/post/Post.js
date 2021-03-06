import React, {Component} from 'react';
import Avatar from '../common/Avatar';
import {styles, colors} from '../../styles/styles';
import {addLike} from '../../utils/database';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numLikes: props.post.likes
        }
    }

    addLike = () => {
        addLike(this.props.post).then(response => {
            console.log(response);
            this.setState({numLikes: response.likes});
        })
    }

    render() {
        console.log('Render do component Post: ', this.state);
        const {props} = this;
        return (
            <div style={styles.grayBox}>
                <Avatar
                    image={props.post.user.thumb_url}
                    name={props.post.user.name}
                    time={props.post.created_at}
                />
                <div style={{...styles.box, backgroundColor: 'white'}}>
                    <p>{props.post.content}</p>
                </div>
                {/*<div>*/}
                {/*<p style={{color: colors.appBlue}}>Karla</p>*/}
                {/*<div style={{...styles.box, backgroundColor: 'white', padding: 5}}>*/}
                {/*<p>Nulla facilisi. Curabitur tincidunt odio eu facilisis convallis. Maecenas commodo et*/}
                {/*dolor ac*/}
                {/*blandit. Proin tincidunt mauris odio, vel blandit mauris finibus sit amet.</p>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*<p style={{color: colors.appBlue}}>Jonny</p>*/}
                {/*<div style={{...styles.box, backgroundColor: 'white', padding: 5}}>*/}
                {/*<p>Nulla facilisi. Curabitur tincidunt odio eu facilisis convallis. Maecenas commodo et*/}
                {/*dolor ac*/}
                {/*blandit. Proin tincidunt mauris odio, vel blandit mauris finibus sit amet.</p>*/}
                {/*</div>*/}
                {/*</div>*/}
                <button
                    onClick={this.props.onButtonClick}
                    style={styles.blueButton}>
                    Comentar
                </button>
                <button
                    onClick={this.addLike}
                    style={{...styles.blueButton, marginLeft: 20}}>
                    {'Likes ' + this.state.numLikes}
                </button>
            </div>
        )
    }
}

export default Post;
