import React from "react"


const HeroRow2 = () =>

  <div ClassName = "row">
    	{/* left Hero */}
    <div className = "col-lg-3">
      <img className = "img-thumbnail heroBTN" alt ="Hero picture is not working" src="assets/pic/zenyatta.jpg"  />
    </div>
      {/*Middle Left break*/}
    <div className = "col-lg-1"></div>
    {/*Middle Hero*/}
    <div className = "col-lg-3">
      <img className = "img-thumbnail heroBTN" alt ="Hero picture is not working" src= "assets/pic/sombra.jpg" />
    </div>
    {/*Middle Right break*/}
    <div className = "col-lg-1"></div>
    	{/* Right Hero */}
    <div className = "col-lg-3">
      <img className = "img-thumbnail heroBTN" alt ="Hero picture is not working" src= "assets/pic/soldier76.png" />
    </div>
  </div>

export default HeroRow2;
