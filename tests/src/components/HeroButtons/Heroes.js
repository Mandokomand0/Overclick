import React from "react";
import HeroRow1 from "../HeroRow1"
import HeroRow2 from "../HeroRow2"
import HeroRow3 from "../HeroRow3"
class Heroes extends React.Component{
  // Setting the initial state of the currentScore and topScore
state = {
  currentScore: 0,
  topScore: 0
};
const hero ={
  1: {
    name:"Mcree"
    picture: 'assets/pic/mcree.jpg'
    selected: false
  },
  2: {
    name:'Mercy'
    picture: 'assets/pic/mercy.png'
    selected: false
  },
  3: {
    name:'Sombra'
    picture: 'assets/pic/sombra.jpg'
    selected: false
  },
  4: {
    name:'D.Va'
    picture: 'assets/pic/dva.png'
    selected: false
  },
  5: {
    name:'Soldier 76'
    picture: 'assets/pic/soldier76.png'
    selected: false
  },
  6: {
    name:'Zenyatta'
    picture: 'assets/pic/zenyatta.jpg'
    selected: false
  },
  7: {
    name:'Moira'
    picture: 'assets/pic/moira.jpg'
    selected: false
  },
  8: {
    name:'Reinhardt'
    picture: 'assets/pic/reinhardt.jpg'
    selected: false
  },
  9: {
    name:'Hanzo'
    picture: 'assets/pic/hanzo.png'
    selected: false
  }
}

// handleIncrement increments this.state.count by 1
handleChange = () => {
  // We always use the setState method to update a component's state
  this.setState({ currentScore: this.state.currentScore + 1 });
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
