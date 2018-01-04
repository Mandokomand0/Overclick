import React from "react";

class Results extends React.Component{

  render() {
    return (
  <div className = "row">
    <div className = "col-lg-6">
      <h2> you are so not right </h2>
    </div>
    <div className = "col-lg-6">
      <h2>
      Score: {this.state.currentScore} || Your Top Score: {this.state.topScore}
      </h2>
    </div>
  </div>
    );
  }
}

  export default Results;
