import React from 'react'
import MAIN from "../assets/5B.jpeg";
import iso from "../assets/iso.png";


const Main = () => {
  return (
    <div>
      {/* Contenedor principal */}
        <div className="min-h-6 bg-white px-4 py-10 mb-8">
        
        {/* Sección del encabezado */}
            <div className="flex flex-col sm:flex-row items-center justify-center">
                
                {/* Imagen principal - Oculta en móviles */}
                <div className="hidden lg:flex space-x-5 mb-5 lg:mb-0">
                    <img src={MAIN} alt="moneda" className="lg:block hidden"/>
                </div>

                <div className="text-3xl lr-4 text-center lg:text-left text-carousel-100 lg:text-3xl mt-4 lg:mt-16 font-bold font-poppins">
                    <p>¡Reafirmamos nuestro</p>
                    <p>liderazgo como la primera</p>
                    <p className='text-text-100'>casa de cambio online que</p>
                    <p className='text-text-100'>llega a los 5 mil millones de</p>
                    <p className='text-text-100'>dólares<span className='text-carousel-100'>!</span> </p>
                    <img src={iso} alt='' className='mx-auto lg:mx-0 mt-4'/>
                </div>



            <div className="rounded-lg shadow-lg py-8 px-6 bg-header-200">
                
                {/* Sección de tasas de cambio */}
                <div className="flex justify-between items-center mb-2 border-2 py-1 px-4 lg:py-3 lg:px-8 border-white bg-white rounded-lg">
                    <div className="text-sm border-2 px-2 border-carousel-100 text-carousel-100 rounded-lg lg:py-2 lg:px-4 mx-2">
                        <p>Compra: <span className="text-carousel-100 p-2 font-bold">S/ 3.7505</span></p>
                    </div>
                    <div className="text-sm border-2 px-2 border-gray-50 bg-gray-50 rounded-lg lg:py-2 lg:px-4 mx-3">
                        <p>Venta: <span className="text-gray-900 font-bold">S/ 3.7805</span></p>
                    </div>
                </div>
                
                {/* PEN */}
                <div className="flex items-center mb-2  bg-white rounded-lg py-5">
                    <div className="flex items-center px-3 py-1 text-sm">
                        <span className="font-bold text-gray-800">PEN</span>
                        <i className="fas fa-caret-down ml-1"></i>
                    </div>
                    <div className="ml-2 px-4 py-2 text-2xl w-full text-right">
                        <span className="font-bold">S/ 264.52</span>
                    </div>
                </div>
                
                {/* USD */}
                <div className="flex items-center mb-2  bg-white rounded-lg py-5">
                    <div className="flex items-center px-3 py-1 text-sm">
                        <span className="font-bold text-gray-800">USD</span>
                        <i className="fas fa-caret-down ml-1"></i>
                    </div>
                    <div className="ml-2 px-4 py-2 text-2xl w-full text-right">
                        <span className="font-bold">$ 264.52</span>
                    </div>
                </div>
                
                <button className="w-full bg-white hover:bg-header-300 text-carousel-100 font-bold py-4 px-4 rounded-lg transition duration-200">
                Usar un cupón o código
                </button>
                <div className="text-center mt-2 text-sm">
                <p>Ahorro promedio: <span className="text-gray-800 font-bold text-base">S/ 21.24</span></p>
                </div>
                <button className="w-full bg-carousel-100 hover:bg-purple-700 text-white font-bold py-4 px-4 rounded-lg transition duration-200 mt-2">
                Iniciar la operación →
                </button>
            </div>
        </div>
  </div>
</div>
  )
}

export default Main
