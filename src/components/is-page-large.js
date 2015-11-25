import React, { Component } from "react";

// A higher-order component

export var IsPageLarge = ComposedComponent => class extends Component {
  constructor() {
    super()
    this.state = { large: window.innerWidth > 1000 }
  }
  componentWillMount() {
    window.addEventListener("resize", this.updateDimensions)
  }
  componentWillUnmount(){
    window.removeEventListener("resize", this.updateDimensions)
  }
  updateDimensions = () => {
    this.setState({
      large: window.innerWidth > 1000
    })
  }
  render() {
    return <ComposedComponent {...this.props} pageIsLarge={this.state.large} />
  }
};