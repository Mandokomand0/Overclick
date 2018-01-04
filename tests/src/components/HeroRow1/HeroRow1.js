import React from "react"


const HeroRow1 = () =>

  <div ClassName = "row">
    	{/* left Hero */}
    <div className = "col-lg-3">
      <img className = "img-thumbnail heroBTN" alt ="Hero picture is not working" src="assets/pic/mercy.png"  onClick={() => this.handleIncrement()} />
    </div>
      {/*Middle Left break*/}
    <div className = "col-lg-1"></div>
    {/*Middle Hero*/}
    <div className = "col-lg-3">
      <img className = "img-thumbnail heroBTN" alt ="Hero picture is not working" src= "assets/pic/dva.png" />
    </div>
    {/*Middle Right break*/}
    <div className = "col-lg-1"></div>
    	{/* Right Hero */}
    <div className = "col-lg-3">
      <img className = "img-thumbnail heroBTN" alt ="Hero picture is not working" src= "assets/pic/mcree.jpg" />
    </div>
  </div>

export default HeroRow1;
