import React from 'react'
import PIG from "../assets/alcancia.svg";
import MONEY from "../assets/money-blue-icon.svg";
import PERSON from "../assets/user-blue-icon.svg";


const Estadistica = () => {
  return (
    <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row" style={{ height: 'auto' }}>
        {/* Primera Columna */}
        <div className="flex-1 flex flex-col justify-center items-center md:pl-16 mt-8" style={{ height: 'auto' }}> 
            <h1 className="text-4xl font-bold text-carousel-100 mb-4 px-6 leading-normal text-center md:text-left">Somos la casa de cambio online líder del Perú</h1>
            <p className="text-base text-gray-700 mb-10 px-6 text-center md:text-left">¡Tenemos el más alto volumen de dólares cambiados! Las personas consideran a Rextie como la casa de cambio online más confiable.</p>
        </div>

        {/* Segunda Columna */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 font-poppins mt-6" style={{ paddingLeft: '24px' }}> 
            <div className="bg-header-200 rounded-lg shadow-md py-6 px-4 flex flex-col items-center text-center" style={{ height: 'auto' }}>
                <div className="mb-4">
                    <img src={MONEY} alt="moneda" className="w-16 h-16" />
                </div>
                <span className="text-lg font-semibold text-carousel-100">+ 5 mil millones</span>
                <span className="text-lg text-carousel-100">de dólares negociados</span>
            </div>
            <div className="bg-header-200 rounded-lg shadow-md py-6 px-6 flex flex-col items-center text-center" style={{ height: 'auto' }}>
                <div className="mb-4">
                    <img src={PERSON} alt="moneda" className="w-16 h-16" />
                </div>
                <span className="text-lg font-semibold text-carousel-100">+ 169 mil</span>
                <span className="text-lg text-carousel-100">personas confían en nosotros</span>
            </div>
            <div className="bg-header-200 rounded-lg shadow-md py-6 px-2 flex flex-col items-center text-center" style={{ height: 'auto' }}>
                <div className="mb-4">
                    <img src={PIG} alt="moneda" className="w-16 h-16" />
                </div>
                <span className="text-lg font-semibold text-carousel-100">+ 276 millones</span>
                <span className="text-lg text-carousel-100">de soles ahorrados</span>
            </div>
        </div>
    </div>
  )
}

export default Estadistica
