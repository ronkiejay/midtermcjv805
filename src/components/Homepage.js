import React from 'react'
import Header from "./Header";
import LeftSide from "./LeftSide";
import Middle from "./Middle";
import RightSide from "./RightSide";

const Homepage = () => {
    return (
        <div>
           <Header />
      <div className="grid grid-col-3">
        <LeftSide />
        <Middle />
        {/* <Middle buttons={buttons} /> */}
        
        <RightSide />
      </div> 
        </div>
    )
}

export default Homepage
