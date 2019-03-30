import React from 'react';
import {styles, appBlue} from '../../styles/styles'

const PostForm = () => {
    return (
        <div style={styles.grayBox}>
            <h3 style={{color: appBlue}}>
                Postar agora
            </h3>
            <input style={{width: '100%'}}/>
            <button
                style={styles.blueButton}>
                Enviar
            </button>
        </div>
    )
};

export default PostForm;
