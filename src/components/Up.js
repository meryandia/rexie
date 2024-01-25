import React from 'react';

const Up = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <div>
      <div>
        <div className="flex justify-center">
          <div className="w-full border-t-4  border-blue-600">
            <button
              onClick={scrollToTop} 
              className="bg-blue-600 text-white w-10 h-10 rounded-full mx-auto flex items-center justify-center -mt-5 shadow-lg hover:bg-blue-700">
              ▲
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Up;
