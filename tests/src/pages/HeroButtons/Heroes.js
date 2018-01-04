import React from "react";
import HeroRow1 from "../../components/HeroRow1"
import HeroRow2 from "../../components/HeroRow2"
import HeroRow3 from "../../components/HeroRow3"
class Heroes extends React.Component{
  // Setting the initial state of the currentScore and topScore
state = {
  currentScore: 0,
  topScore: 0
};

// handleIncrement increments this.state.count by 1
handleIncrement = () => {
  // We always use the setState method to update a component's state
  this.setState({ count: this.state.count + 1 });
};

  render() {
    return (
      <div className = "row">
      	{/* left col breaker */}
        <div className = "col-lg-2"></div>

      	{/* Main Dispaly */}
        <div className = "col-lg-8">

        <HeroRow1 />
        <HeroRow2 />
        <HeroRow3 />

        </div>
        	{/* Right Col Breaker*/}
        <div className = "col-lg-2"></div>
      </div>

    );
  }
}



  export default Heroes;
