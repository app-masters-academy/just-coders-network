import React, {Component} from 'react';
import {styles, appBlue} from '../../styles/styles'

class PostForm extends Component {
    render(){
        console.log('Render do PostForm');
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
    }
}

export default PostForm;
