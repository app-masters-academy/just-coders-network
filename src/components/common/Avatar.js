import React, {Component} from 'react';

class Avatar extends Component {
    render(){
        console.log('Avatar props', this.props);
        return (
            <img src={this.props.image} />
        )
    }
}

export default Avatar;
