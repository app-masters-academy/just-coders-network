import React, {Component} from 'react';
import {styles, appBlue} from '../../styles/styles'

class PostForm extends Component {
    constructor(){
        super();
        this.state={
            content: ''
        }
    }

    render(){
        console.log('Render do PostForm');
        return (
            <div style={styles.grayBox}>
                <h3 style={{color: appBlue}}>
                    Postar agora
                </h3>
                <input
                    style={{width: '100%'}}
                    value={this.state.content}/>
                <button
                    style={styles.blueButton}>
                    Enviar
                </button>
            </div>
        )
    }
}

export default PostForm;
