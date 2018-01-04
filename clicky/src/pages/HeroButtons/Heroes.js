import React from "react";
{/*import HeroRow1 from "../../components/HeroRow1"
import HeroRow2 from "../../components/HeroRow2"
import HeroRow3 from "../../components/HeroRow3"*/}
const Heroes = props => {
  // Setting the initial state of the currentScore and topScore
state = {
  currentScore: 0,
  topScore: 0,
  correctness: ["Click a picture to start. Try to click on only picutes that you have not selected during the round.", "Correct", "Incorrect!"],
  correctControl: 0,
  currentHero: 0,
  selectedHeroes: [],
  heroPostions: [0,1,2,3,4,5,6,7,8],
  heroObject : {
    1: {
      name:"Mcree",
      picture: 'assets/pic/mcree.jpg'
    },
    2: {
      name:'Mercy',
      picture: 'assets/pic/mercy.png'
    },
    3: {
      name:'Sombra',
      picture: 'assets/pic/sombra.jpg'
    },
    4: {
      name:'D.Va',
      picture: 'assets/pic/dva.png'
    },
    5: {
      name:'Soldier 76',
      picture: 'assets/pic/soldier76.png'
    },
    6: {
      name:'Zenyatta',
      picture: 'assets/pic/zenyatta.jpg'
    },
    7: {
      name:'Moira',
      picture: 'assets/pic/moira.jpg'
    },
    8: {
      name:'Reinhardt',
      picture: 'assets/pic/reinhardt.jpg'
    },
    9: {
      name:'Hanzo',
      picture: 'assets/pic/hanzo.png'
    }
  },
};


// handleClick handles the click events for the
handleClick = () => {
  // We always use the setState method to update a component's state
  this.setState({
    currentScore: this.state.currentScore + 1
  });
};

  render()
    return (
      <div className = "container">
      <div className = "row">
        <div className = "col-lg-6">
          <h3>
           {this.state.correctness[this.state.correctControl]}
           </h3>
        </div>
        <div className = "col-lg-6">
          <h2>
          Score: {this.state.currentScore} || Your Top Score: {this.state.topScore}
          </h2>
        </div>
      </div>
      <div className = "row">
      	{/* left col breaker */}
        <div className = "col-lg-2"></div>

      	{/* Main Dispaly */}
        <div className = "col-lg-8">
          {/*Row 1*/}
          <div className = "row">
            	{/* left Hero */}
            <div className = "col-lg-3">
              <img className = "img-thumbnail heroBTN" alt ="Hero picture is not working" src= {props.hero.Mcree.picture}  onClick={() => this.handleClick()} />
            </div>
              {/*Middle Left break*/}
            <div className = "col-lg-1"></div>
            {/*Middle Hero*/}
            <div className = "col-lg-3">
              <img className = "img-thumbnail heroBTN" alt ="Hero picture is not working" src=  "assets/pic/mercy.png" onClick={() => this.handleClick()}/>
            </div>
            {/*Middle Right break*/}
            <div className = "col-lg-1"></div>
            	{/* Right Hero */}
            <div className = "col-lg-3">
              <img className = "img-thumbnail heroBTN" alt ="Hero picture is not working" src= "assets/pic/mcree.jpg" onClick={() => this.handleClick()}/>
            </div>
          </div>
        {/*Row 2*/}
          <div className = "row">
              {/* left Hero */}
            <div className = "col-lg-3">
              <img className = "img-thumbnail heroBTN" alt ="Hero picture is not working" src="assets/pic/zenyatta.jpg"  onClick={() => this.handleClick()}/>
            </div>
              {/*Middle Left break*/}
            <div className = "col-lg-1"></div>
            {/*Middle Hero*/}
            <div className = "col-lg-3">
              <img className = "img-thumbnail heroBTN" alt ="Hero picture is not working" src= "assets/pic/sombra.jpg" onClick={() => this.handleClick()}/>
            </div>
            {/*Middle Right break*/}
            <div className = "col-lg-1"></div>
              {/* Right Hero */}
            <div className = "col-lg-3">
              <img className = "img-thumbnail heroBTN" alt ="Hero picture is not working" src= "assets/pic/soldier76.png" onClick={() => this.handleClick()}/>
            </div>
          </div>
        {/*bottom row*/}
        <div className = "row">
            {/* left Hero */}
          <div className = "col-lg-3">
            <img className = "img-thumbnail heroBTN" alt ="Hero picture is not working" src="assets/pic/moira.jpg"  onClick={() => this.handleClick()}/>
          </div>
            {/*Middle Left break*/}
          <div className = "col-lg-1"></div>
          {/*Middle Hero*/}
          <div className = "col-lg-3">
            <img className = "img-thumbnail heroBTN" alt ="Hero picture is not working" src= "assets/pic/hanzo.png" onClick={() => this.handleClick()}/>
          </div>
          {/*Middle Right break*/}
          <div className = "col-lg-1"></div>
            {/* Right Hero */}
          <div className = "col-lg-3">
            <img className = "img-thumbnail heroBTN" alt ="Hero picture is not working" src= "assets/pic/reinhardt.jpg" onClick={() => this.handleClick()}/>
          </div>
        </div>
        	{/* Right Col Breaker*/}
        <div className = "col-lg-2"></div>
      </div>
      </div>
    </div>
    );
  }




  export default Heroes;
