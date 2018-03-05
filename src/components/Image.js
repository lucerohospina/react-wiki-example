import React, { Component } from 'react';

class ImageSection extends Component {
  render(){
    return(
        <div>
          <img src={this.props.pic} alt="grace-hopper"/>
        </div>
    )
  }
}

export default ImageSection;