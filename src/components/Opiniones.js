import React from 'react';

const Opiniones = () => {
  return (
    <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 py-12">
            <h1 className="text-3xl sm:text-5xl font-bold text-center text-carousel-100 mb-8">Descubre lo que dicen nuestros clientes</h1>
            <p className="text-gray-600 text-center mb-12">Conoce de primera mano lo que es cambiar dinero con Rextie.</p>
            <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 sm:space-x-4">
                {[
                    { quote: '"Mi experiencia al usar la aplicación fue estupenda. Es sencilla, transparente en las tasas de cambio, y me permitió ahorrar tiempo. Es la mejor app que he usado".', author: 'Chanel Ramos' },
                    { quote: '"La mejor casa de cambio online, siempre se preocupan porque sea un servicio bueno y honesto. Me llaman incluso cuando pasó algún error y lo solucionan rápido".', author: 'Grecia Retamozo' },
                    { quote: '"Hasta el momento estoy muy contento con el servicio brindado por Rextie. Nunca tuve problemas con la app, es de mucha ayuda. La recomiendo".', author: 'Jorge Suarez' },
                    { quote: '"Rextie tiene una muy buena app, sencilla de usar y con muy buenos precios de venta y compra del dólar. Es la mejor casa de cambio online".', author: 'Reni Ravina' }
                ].map((testimonial, index) => (
                    <div key={index} className="bg-header-200 rounded-lg shadow p-4 sm:p-6 w-full sm:w-1/2 lg:w-1/4 flex flex-col justify-between lg:h-72">
                        <blockquote className="text-gray-600 italic mb-1 lg:mb-4">{testimonial.quote}</blockquote>
                        <p className="text-gray-800 font-semibold">{testimonial.author}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Opiniones;
