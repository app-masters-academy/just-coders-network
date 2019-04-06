import React, {Component} from 'react';
import Avatar from '../common/Avatar';
import {styles, colors} from '../../styles/styles';

class Post extends Component {
    render(){
        const props = this.props;
        return (
            <div style={styles.grayBox}>
                <Avatar
                    image={props.user_image}
                    name={props.user_name}
                    time={props.created_at}
                />
                <div style={{...styles.box, backgroundColor: 'white'}}>
                    <p>{props.content}</p>
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
                <input style={{width: '100%'}}/>
                <button
                    style={styles.blueButton}>
                    Comentar
                </button>
                <button
                    onClick={() => {
                        console.log('Clicou no botão');
                    }}
                    style={{...styles.blueButton, marginLeft: 20}}>
                    {'Likes '}
                </button>
            </div>
        )
    }
}

export default Post;
