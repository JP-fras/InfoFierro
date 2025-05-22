import React from "react";
import logo from "../../assets/logo.png"; // Asegúrate de colocar aquí la imagen que usaste

const Header = ({ onNavigate }) => {
  return (
    <header className="bg-blue-500 text-white py-3 px-6 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="InfoFierro Logo" className="w-12 h-12" />
        <span className="font-bold text-lg">InfoFierro</span>
      </div>

      {/* Menú de navegación */}
      <nav className="flex space-x-6">
        <button
          onClick={() => onNavigate("inicio")}
          className="hover:underline"
        >
          Inicio
        </button>
        <button
          onClick={() => onNavigate("analizar")}
          className="hover: HeroSection"
        >
          Analizar
        </button>
        <button
          onClick={() => onNavigate("caracteristicas")}
          className="hover:underline"
        >
          Características
        </button>
        <button onClick={() => onNavigate("faq")} className="hover:underline">
          Preguntas Frecuentes
        </button>
      </nav>

      {/* Botón Registrarse */}
      <div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg">
          Registrarse
        </button>
      </div>
    </header>
  );
};

export default Header;
