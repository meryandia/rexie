import React from 'react'
import bar from "../assets/bar.png";

const Video = () => {
  return (
    <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 py-12">
            <h1 className="text-3xl sm:text-5xl font-bold text-center text-carousel-100 mb-8">Rextie en los medios</h1>
            <p className="text-gray-600 text-center mb-12">Encuentra artículos y noticias en medios que hablan de nuestra casa de cambio online.</p>
            <div className="flex flex-col lg:flex-row justify-center items-start space-y-4 lg:space-y-0 lg:space-x-4">
                <iframe className="w-full lg:w-1/2" height="315" src="https://www.youtube.com/embed/j3s5nfNl12Q?si=6cuRbjGkqLYCCCkQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className="w-full md:w-auto md:flex-1 px-4">
                    <div className="flex items-center mb-2  mt-8">
                        <button className="text-gray-600 hover:text-gray-500 p-2">
                            <i className="fas fa-arrow-left"></i>
                        </button>
                        <div className="flex overflow-hidden mx-2">
                            <img src={bar} alt='' />
                        </div>
                        <button className="text-gray-600 hover:text-gray-500 p-2">
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                    <div className="text-pippins p-4 rounded-lg">
                        <p className="mb-2">"Citi ha realizado una inversión estratégica en Rextie. Se trata de la primera inversión del banco en tecnología financiera en América Latina. Con este capital, la fintech espera acumular 7.000 millones de dólares transaccionados en la plataforma hacia el 2024."</p>
                        <p className="text-blue-600 hover:underline font-bold">Ver noticia</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Video
