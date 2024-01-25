import React from 'react';
import logo from "../assets/logoRextie.png";
import sunat from "../assets/sunat.svg";
import banco from "../assets/banco.svg";

const TipoCambo = () => {
  return (
    <div className="container mx-auto px-4 pt-8">
        <div className="flex flex-col-reverse mb-8 md:flex-row justify-around items-center py-10 px-">
            
            <table className="w-full sm:w-5/12 md:max-w-sm text-left rounded-lg overflow-hidden shadow-lg mb-6 md:mb-0">
                <tr className='bg-carousel-100 text-white p-4 md:p-8'> 
                    <td className="rounded-tl-lg p-2 md:p-4">
                        <img src={logo} alt='' className="w-20 md:w-32 h-8 md:h-10 mr-2"/>
                    </td>
                    <td className="p-2 md:p-4 font-bold">
                        Compra <span className='block text-sm md:text-base'>S/ 37510</span>
                    </td>
                    <td className="rounded-tr-lg p-2 md:p-4 font-bold">
                        Venta <span className='block text-sm md:text-base'>S/ 37510</span>
                    </td>
                </tr>

                <tr className='bg-gray-100 p-4 md:p-8'> 
                    <td className="p-2 md:p-4">
                        <img src={sunat} alt='' className="w-20 md:w-32 h-8 md:h-10 mr-2"/>
                    </td>
                    <td className="p-2 md:p-4">
                        S/ 37510
                    </td>
                    <td className="p-8 md:p-4">
                        S/ 37510
                    </td>
                </tr>

                <tr className='bg-gray-100 p-4 md:p-8'> 
                    <td className="rounded-bl-lg p-2 md:p-4">
                        <div className='flex items-center'>
                            <img src={banco} alt='' className="w-8 md:w-10 h-8 md:h-10"/>
                            <p className='ml-2 md:ml-4 text-sm md:text-base'>Bancos</p>
                        </div>
                    </td>
                    <td className="p-2 md:p-4">
                        S/ 37510
                    </td>
                    <td className="rounded-br-lg p-2 md:p-4">
                        S/ 37510
                    </td>
                </tr>
            </table>

            {/* Segunda Columna */}
            <div className="w-full md:max-w-xs lg:max-w-xl">
                <h2 className="text-base font-bold text-carousel-100 leading-tight">REXTIE BUSINESS</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-carousel-100 my-4">Tenemos un tipo de cambio exclusivo</h3>
                <p className="text-gray-600 text-sm">Cambia tus dólares a soles de forma segura, rápida y confiable con nuestra casa de cambio online.</p>
                <button className="mt-4 mb-16 bg-carousel-100 text-white py-3 px-4 rounded-sm hover:bg-purple-800 transition-colors">Conocer más</button>
            </div>
        </div>
    </div>
  )
}

export default TipoCambo;
