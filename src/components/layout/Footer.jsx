import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <footer className="bg-[#0C6CB2] text-white py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Marca */}
        <div className="text-lg font-semibold">
          InfoFierro © {new Date().getFullYear()}
        </div>

        {/* Navegación de pie */}
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-[#FF6F00] transition">Inicio</Link>
          <Link to="/nosotros" className="hover:text-[#FF6F00] transition">Nosotros</Link>
          <Link to="/contact" className="hover:text-[#FF6F00] transition">Contacto</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
