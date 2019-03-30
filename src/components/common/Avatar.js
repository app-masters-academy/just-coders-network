import React, {Component} from 'react';
import {colors} from '../../styles/styles';

class Avatar extends Component {
    render() {
        return (
            <div>
                <img style={avatarStyles.image} src={this.props.image}/>
                <p style={{color: colors.appBlue}}>{this.props.name}</p>
                <small style={{color: colors.appBlue}}>{this.props.time}</small>
            </div>
        )
    }
}

const avatarStyles = {
    image: {
        width: 40,
        height: 40,
        borderRadius: 20,
        objectFit: 'cover'
    },
    container: {
        display: 'flex'
    }
}

export default Avatar;
