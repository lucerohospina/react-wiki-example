import React, { Component } from 'react';

class MainSection extends Component {
  render() {
    return (
        <div>
          <p>{this.props.description}</p>
          <p>{this.props.description2}</p>
          <p>{this.props.description3}</p>
        </div>
    )
  }
}

export default MainSection;