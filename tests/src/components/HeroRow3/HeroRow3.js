import React from "react"


const HeroRow3 = () =>

  <div ClassName = "row">
    	{/* left Hero */}
    <div className = "col-lg-3">
      <img className = "img-thumbnail heroBTN" alt ="Hero picture is not working" src="assets/pic/moira.jpg"  />
    </div>
      {/*Middle Left break*/}
    <div className = "col-lg-1"></div>
    {/*Middle Hero*/}
    <div className = "col-lg-3">
      <img className = "img-thumbnail heroBTN" alt ="Hero picture is not working" src= "assets/pic/hanzo.png" />
    </div>
    {/*Middle Right break*/}
    <div className = "col-lg-1"></div>
    	{/* Right Hero */}
    <div className = "col-lg-3">
      <img className = "img-thumbnail heroBTN" alt ="Hero picture is not working" src= "assets/pic/reinhardt.jpg" />
    </div>
  </div>

export default HeroRow3;
