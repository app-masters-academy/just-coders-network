import React, {Component} from 'react';

class Avatar extends Component {
    render(){
        return (
            <img style={avatarStyles} src={this.props.image} />
        )
    }
}

const avatarStyles = {
    width: 40,
    height: 40,
    borderRadius: 20,
    objectFit: 'cover'
}

export default Avatar;
