import React from "react";
import Header from "./Header";

const Layout = ({ children, onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header onNavigate={onNavigate} />
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-100 border-t p-4 text-center">
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => onNavigate("inicio")}
            className="text-blue-600 hover:underline"
          >
            Inicio
          </button>
          <button
            onClick={() => onNavigate("nosotros")}
            className="text-blue-600 hover:underline"
          >
            Nosotros
          </button>
          <button
            onClick={() => onNavigate("contacto")}
            className="text-blue-600 hover:underline"
          >
            Contacto
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-2">© 2025 InfoFierro</p>
      </footer>
    </div>
  );
};

export default Layout;
