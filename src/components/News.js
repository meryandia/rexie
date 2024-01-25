import React from "react";
import banner1 from "../assets/banner1.png"
import banner1m from "../assets/banner1m.png"

const News = () => {
    return (
      <div className="bg-header-300">
        <img 
            src={banner1} 
            alt="" 
            className="hidden  lg:block mx-auto"
        />
        <img 
            src={banner1m} 
            alt="" 
            className="block lg:hidden mx-auto"
        />
      </div>
    );
  };
  
  export default News;