import React from 'react';

function Footer() {
  return (
<<<<<<< HEAD
    <footer className="bg-[B#0C6C2] text-white py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Marca */}
        <div className="text-lg font-semibold">
          InfoFierro © {new Date().getFullYear()    }
=======
    <footer className="bg-[#0C6CB2] text-white py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Marca */}
        <div className="text-lg font-semibold">
          InfoFierro © {new Date().getFullYear()}
>>>>>>> origin/raigo
        </div>

        {/* Navegación de pie */}
        <div className="flex space-x-6">
          <a href="#" className="hover:text-[#FF6F00] transition">Inicio</a>
          <a href="#" className="hover:text-[#FF6F00] transition">Nosotros</a>
          <a href="#" className="hover:text-[#FF6F00] transition">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
