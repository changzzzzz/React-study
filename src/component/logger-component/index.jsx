import React, { Component } from "react";
function Logger(OriginalComponent) {
  class NewComponent extends Component {
    doLog() {}

    componentDidMount() {
      console.log("Component is mounted...");
    }

    render() {
      return <OriginalComponent {...this.props} />;
    }
  }
  return NewComponent;
}

export default Logger;
