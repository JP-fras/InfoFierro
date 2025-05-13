// HeroSection.jsx
import { useState, useEffect } from 'react';

// Importa las imágenes para el carrusel (asegúrate de tenerlas en tu carpeta assets)
import carImage1 from '../../assets/logo.png';
import carImage2 from '../../assets/logo.png';
import carImage3 from '../../assets/logo.png';

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Array con datos de las diapositivas del carrusel
  const slides = [
    {
      image: carImage1,
      title: "Análisis Inteligente de Autos",
      description: "Descubre todo sobre un vehículo con una simple foto. Tecnología avanzada de reconocimiento de imágenes.",
      cta: "Probar ahora"
    },
    {
      image: carImage2,
      title: "Diagnóstico instantáneo",
      description: "Obtén información detallada sobre marca, modelo, año y características en segundos.",
      cta: "Analizar foto"
    },
    {
      image: carImage3,
      title: "Cotiza en el momento",
      description: "Con nuestro analisis a tiempo real sabras el valor de mercado en el momento de sacar la foto",
      cta: "Descubrir más"
    }
  ];

  // Función para cambiar a la siguiente diapositiva
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Función para cambiar a la diapositiva anterior
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Función para ir a una diapositiva específica
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Cambio automático de diapositiva cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);

  // Función para desplazarse a la sección de carga de fotos
  const scrollToUploader = () => {
    const uploaderSection = document.getElementById('photo-uploader');
    if (uploaderSection) {
      uploaderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Slides container */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Background image with overlay */}
            <div className="absolute inset-0">
              <img 
                src={slide.image} 
                alt={`Car slide ${index + 1}`} 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
            </div>
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6 md:px-12 z-10">
                <div className="max-w-xl lg:max-w-2xl text-white">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 transform transition-transform duration-700 translate-y-0">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl opacity-90 mb-8 transform transition-transform duration-700 delay-100 translate-y-0 max-w-lg">
                    {slide.description}
                  </p>
                  <button 
                    onClick={scrollToUploader}
                    className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold px-8 py-3 rounded-lg text-lg transform hover:scale-105 duration-300"
                  >
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 z-20 transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 z-20 transition-all duration-300"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <svg className="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

export default HeroSection;