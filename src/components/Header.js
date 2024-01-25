import React from "react";
import logo from "../assets/logoRextie.png";
import { useState, useEffect } from "react";



const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
  
    // La altura del componente que está arriba del Header 
    const heightOfTopComponent = 0; 
  
    useEffect(() => {
      const handleScroll = () => {
        // Establece el estado a true si el scroll es mayor que la altura del componente superior
        setIsScrolled(window.scrollY > heightOfTopComponent);
      };
  
      // Agrega el listener para el evento de scroll
      window.addEventListener('scroll', handleScroll);
  
      // Limpia el listener cuando el componente se desmonte
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <header className={`${isScrolled ? "fixed top-0" : "relative"} w-full transition duration-300 ease-in-out`} style={{marginTop: isScrolled ? '0' : `${heightOfTopComponent}px`}}>
        {/* NAV DE ARRIBA */}
        <nav className=" hidden lg:block bg-header-200">
            <div className="container mx-auto flex items-center py-2">
                <div className="text-text-100 font-poppins text-16 mr-8 font-bold border-b-4 border-text-200">
                Personas
                </div>
                <div className="text-text-100 font-poppins text-16 border-transparent border-b-2 hover:font-bold hover:border-b-2 hover:border-text-200">
                Empresas
                </div>
            </div>
        </nav>


        {/* NAV DE ABAJO */}
        <nav className="bg-white border-b-2 border-gray-300 shadow-sm p-4">
            <div className="container mx-auto flex items-center justify-between text-text-100">

                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="w-32 h-10 mr-2" />
                    <span className="hidden lg:inline-block mx-1">|</span>
                    <p className="hidden lg:inline-block ml-3">La casa de cambio online, <span className="font-bold">Líder del Perú</span></p>
                </div>

                <div className="flex items-center">
                    <p className="hidden lg:inline-block mr-8">Nosotros</p>
                    <p className="hidden lg:inline-block mr-8">Blog</p>
                    <p className="hidden lg:inline-block mr-8">Servicios
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        className="inline-block ml-4"
                    >
                        <path
                        d="M1.25 1.12506L5 4.87506L8.75 1.12506"
                        stroke="#FF6E00"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </svg>
                    </p>
                    <span className="hidden lg:inline-block ml-2 mr-4">|</span>
                    <button className="bg-text-100 text-white px-8 py-4 rounded">Crear Cuenta</button>
                </div>

            </div>
        </nav>
    </header>
  );
};

export default Header;
