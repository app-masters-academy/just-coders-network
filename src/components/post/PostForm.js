import React, {Component} from 'react';
import {styles, appBlue} from '../../styles/styles'

class PostForm extends Component {
    constructor(){
        super();
        this.state={
            content: ''
        }
    }

    onContentChange(event){
        const value = event.target.value;
        this.setState({content: value});
    }

    addPost(){
        const post = {
            id: new Date().getTime(),
            user_name: 'Baraky',
            user_image: 'https://thenypost.files.wordpress.com/2018/05/180516-woman-mauled-by-angry-wiener-dogs-feature.jpg?quality=90&strip=all&w=618&h=410&crop=1',
            created_at: 'Agora',
            content: this.state.content
        }
        this.props.onSendButton(post);
        this.setState({content: ''})
    }

    render(){
        console.log('Render do PostForm', this.state);
        return (
            <div style={styles.grayBox}>
                <h3 style={{color: appBlue}}>
                    Postar agora
                </h3>
                <input
                    onChange={this.onContentChange.bind(this)}
                    style={{width: '100%'}}
                    value={this.state.content}/>
                <button
                    onClick={this.addPost.bind(this)}
                    style={styles.blueButton}>
                    Enviar
                </button>
            </div>
        )
    }
}

export default PostForm;
