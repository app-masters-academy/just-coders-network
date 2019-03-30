import React from 'react';
import Avatar from '../common/Avatar';
import {styles, colors} from '../../styles/styles';

const Post = (props) => {
    return (
        <div style={styles.grayBox}>
            <img src={props.user_image} />
            <p style={{color: colors.appBlue}}>{props.user_name}</p>

            <p style={{color: colors.appBlue}}>{props.created_at}</p>
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
        </div>
    )
}

export default Post;
