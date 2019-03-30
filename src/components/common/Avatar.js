import React, {Component} from 'react';
import {colors} from '../../styles/styles';

class Avatar extends Component {
    render() {
        return (
            <div style={avatarStyles.container}>
                <img style={avatarStyles.image} src={this.props.image}/>
                <div>
                    <p style={{color: colors.appBlue, margin: 4}}>{this.props.name}</p>
                    <small style={{color: colors.appBlue}}>{this.props.time}</small>
                </div>
            </div>
        )
    }
}

const avatarStyles = {
    image: {
        width: 40,
        height: 40,
        borderRadius: 20,
        objectFit: 'cover',
        marginRight: 20
    },
    container: {
        display: 'flex'
    }
}

export default Avatar;
