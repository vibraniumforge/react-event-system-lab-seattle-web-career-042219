import React, { Component } from "react";

class EyesOnMe extends Component {
  handleBlur() {
    console.log("Hey! Eyes on me!");
  }

  handleFocus() {
    console.log("Good!");
  }

  render() {
    return (
      <div>
        <button
          type="button"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </div>
    );
  }
}

export default EyesOnMe;
