import React from "react";

const Footer = ({ onNavigate }) => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-5 px-8 flex justify-center gap-8 shadow-inner shadow-black/30 border-t border-blue-500 fixed bottom-0 left-0 w-full z-50">
      {[
        { label: "Inicio", ruta: "inicio" },
        { label: "Contacto", ruta: "contacto" },
        { label: "Nosotros", ruta: "nosotros" },
      ].map((item) => (
        <button
          key={item.ruta}
          onClick={() => onNavigate(item.ruta)}
          className="bg-blue-700/40 hover:bg-white hover:text-blue-800 transition-colors duration-300 px-4 py-2 rounded-xl font-medium shadow-md"
        >
          {item.label}
        </button>
      ))}
    </footer>
  );
};

export default Footer;
