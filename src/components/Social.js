import React from "react";
import redesweb from "../assets/redes-web.png"
import redesm from "../assets/redes-mobile.png"

const Social = () => {
    return (
      <div className="mb-8">
        <img 
            src={redesweb} 
            alt="" 
            className="hidden  lg:block mx-auto"
        />
        <img 
            src={redesm} 
            alt="" 
            className="block lg:hidden mx-auto"
        />
      </div>
    );
  };
  
  export default Social;