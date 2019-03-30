import React, {Component} from 'react';
import {colors} from "../../styles/styles";

class Avatar extends Component {
    render(){
        return (
            <div>
            <img style={avatarStyles} src={this.props.image} />
                <p style={{color: colors.appBlue}}>{props.user_name}</p>

                <p style={{color: colors.appBlue}}>{props.created_at}</p>
            </div>
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
