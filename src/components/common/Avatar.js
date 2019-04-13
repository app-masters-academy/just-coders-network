import React, {Component} from 'react';
import {colors} from '../../styles/styles';
import moment from 'moment';
import ptbr from 'moment/locale/pt-br'

class Avatar extends Component {
    constructor(){
        super();
        moment.locale(ptbr);
    }

    render() {
        return (
            <div style={avatarStyles.container}>
                <img style={avatarStyles.image} src={this.props.image}/>
                <div>
                    <p style={{color: colors.appBlue, margin: 0}}>{this.props.name}</p>
                    <small style={{color: colors.appBlue}}>{moment(this.props.time).fromNow()}</small>
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
