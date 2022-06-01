import React, { Component } from 'react';

export class ClassMouse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  render() {
    return (
      <div>
        X : {this.state.x}, Y : {this.state.y}
      </div>
    );
  }
}

export default ClassMouse;
