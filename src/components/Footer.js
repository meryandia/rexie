import React, { useState } from 'react';
import logo from "../assets/logoRextie.png";

const Footer = () => {
  const [openSections, setOpenSections] = useState({
    servicios: false,
    recursos: false,
    soporte: false
  });

  const toggleSection = (section) => {
    setOpenSections(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  }

  return (
    <footer className="bg-white py-10">
        <div className="max-w-full mx-auto px-4 lg:px-0 flex flex-col items-center lg:flex-row lg:items-start justify-center space-y-4 lg:space-y-0 lg:space-x-12">

            <div className="hidden lg:block mb-6 lg:mb-0 w-full lg:w-auto mt-6">
                <img src={logo} alt="Logo" className="w-32 h-10 mb-4 mx-auto lg:mx-0" />
                <p className="text-gray-400 text-sm text-center lg:text-left">Rextie S.A.C.</p>
                <p className="text-gray-400 text-sm text-center lg:text-left">RUC 20601030013</p>
                <p className="text-gray-400 text-sm mb-4 text-center lg:text-left">Autorizado por la SBS N° 684–2017</p>
            </div>


            <div className="text-left lg:text-left mb-6 lg:mb-0 w-full lg:w-auto">
                <h3 className="text-gray-900 font-bold mb-6 cursor-pointer mt-6 flex justify-between items-center" onClick={() => toggleSection('servicios')}>
                    Servicios
                    <span className="text-right ml-8 lg:hidden">
                        {openSections.servicios ? '▲' : '▼'}
                    </span>
                </h3>
                <ul className={`text-gray-400 text-sm  transition-all duration-500 ease-in-out ${openSections.servicios ? 'block' : 'hidden'} lg:block`}>
                    <li>Rextie Business</li>
                    <li>Rextie Factoring</li>
                    <li>Confirming</li>
                    <li className='mt-4 mr-6'>Visa <span className="rounded-md bg-text-200 py-2 px-1 text-white">Nuevo</span></li>
                </ul>
            </div>
            <div className="text-left lg:text-left mb-6 lg:mb-0 w-full lg:w-auto">
                <h3 className="text-gray-900 font-bold mb-6 cursor-pointer mt-6 flex justify-between items-center" onClick={() => toggleSection('recursos')}>
                    Recursos
                    <span className="lg:hidden">
                        {openSections.recursos ? '▲' : '▼'}
                    </span>
                </h3>
                <ul className={`text-gray-400 text-sm transition-all duration-500 ease-in-out ${openSections.recursos ? 'block' : 'hidden'} lg:block`}>
                    <li>Blog</li>
                    <li>Tipo de cambio</li>
                    <li>Cambio de Dólar a Soles</li>
                    <li>Precio del Dólar</li>
                    <li>Dólar Hoy</li>
                    <li>Dólar</li>
                </ul>
            </div>
            <div className="text-left lg:text-left mb-6 lg:mb-0 w-full lg:w-auto">
                <h3 className="text-gray-900 font-bold mb-6 cursor-pointer mt-6 flex justify-between items-center" onClick={() => toggleSection('soporte')}>
                    Soporte
                    <span className="lg:hidden">
                        {openSections.soporte ? '▲' : '▼'}
                    </span>
                </h3>
                <ul className={`text-gray-400 text-sm transition-all duration-500 ease-in-out ${openSections.soporte ? 'block' : 'hidden'} lg:block`}>
                    <li>Preguntas frecuentes</li>
                    <li>Cómo cambiar dolares con REXTIE</li>
                    <li>Términos y Condiciones</li>
                    <li>Política de Cookies</li>
                    <li>Política de Privacidad</li>
                    <li>Mapa del sitio</li>
                </ul>
            </div>

            <div className="text-center lg:text-left w-full lg:w-auto">
                <h3 className="text-gray-900 font-bold mb-6 mt-6">Contacto</h3>
                <div className="text-gray-400 text-sm">
                    <p className="text-carousel-100 font-bold">info@rextie.com</p>
                    <p className="mt-2">T. 01 700 3301</p>
                    <p className="mt-2">C. 963 896 793</p>
                    <p className="mt-6">Lunes a Viernes:</p>
                    <p className="mt-2">8:00 am - 8:00 pm</p>
                    <p className="mt-6">Sábados:</p>
                    <p className="mt-2">9:00 am - 3:00 pm</p>
                    <p className="mt-6">Av. José Gálvez </p>
                    <p className="mt-2">Barrenechea 566, Of. 101, </p>
                    <p className="mt-2">Urb. Corpac, San Isidro, Lima.</p>
                    <p className="mt-6">Libro de Reclamaciones</p>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
