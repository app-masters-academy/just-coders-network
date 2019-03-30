import React, {Component} from 'react';

class Avatar extends Component {
    render(){
        return (
            <img styles={avatarStyles} src={this.props.image} />
        )
    }
}

const avatarStyles = {
    width: 20,
    height: 20,
    borderRadius: 20
}

export default Avatar;
