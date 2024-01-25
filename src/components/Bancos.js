import React from 'react';
import BCP from "../assets/bancos/bcp.svg";
import COMERCIO from "../assets/bancos/banco-de-comercio-logo.svg";
import BANBIF from "../assets/bancos/banbif.svg";
import PICHINCHA from "../assets/bancos/bancopichincha.svg";
import BBVA from "../assets/bancos/bbva.svg";
import INTERBANK from "../assets/bancos/interbank.svg";
import MIBANCO from "../assets/bancos/mibanco.svg";
import SCOTIABANK from "../assets/bancos/scotiabank.svg";
import RELOJ from "../assets/bancos/clockorange.svg";
import RELOJFAST from "../assets/bancos/rapid.svg";

const Bancos = () => {
    return (
      <div className="min-h-144 bg-header-200 py-5 px-10 flex justify-center items-center">
        <div className="overflow-x-auto w-full">
          <div className="min-w-max md:min-w-0 grid grid-cols-2 gap-x-12 md:gap-x-48 justify-items-center xl:flex justify-center relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-400" />
            
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <img src={RELOJ} alt="Reloj" className="mr-2 w-6 h-6 md:w-auto md:h-auto" />
                <span className="font-poppins font-semibold text-lg md:text-xl">Transferencias inmediatas - 15 min</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <img src={BCP} alt="BCP logo" className="w-16 h-16 md:w-auto md:h-auto" />
                <img src={INTERBANK} alt="Interbank logo" className="w-16 h-16 md:w-auto md:h-auto" />
                <img src={PICHINCHA} alt="Pichincha logo" className="w-16 h-16 md:w-auto md:h-auto" />
                <img src={BANBIF} alt="BanBif logo" className="w-16 h-16 md:w-auto md:h-auto" />
              </div>
              <p className="font-roboto text-base text-gray-700 mt-4">Cobertura en todo el Perú</p>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <img src={RELOJFAST} alt="Reloj Fast" className="mr-2 w-6 h-6 md:w-auto md:h-auto" />
                <span className="font-poppins font-semibold text-lg md:text-xl">Transferencias interbancarias - 24h</span>
              </div>
              <div className="grid grid-cols-4 gap-1">
                <img src={BBVA} alt="BBVA logo" className="w-16 h-16 md:w-auto md:h-auto" />
                <img src={SCOTIABANK} alt="Scotiabank logo" className="w-16 h-16 md:w-auto md:h-auto" />
                <img src={COMERCIO} alt="Banco de Comercio logo" className="w-16 h-16 md:w-auto md:h-auto" />
                <img src={MIBANCO} alt="MiBanco logo" className="w-16 h-16 md:w-auto md:h-auto" />
              </div>
              <p className="font-roboto text-base text-gray-700 mt-4">Cobertura en Lima - <span className="text-text-100 border-b-2 border-text-100 cursor-pointer">Ver bancos disponibles</span></p>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default Bancos;
