
import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sesion, setSesion] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('access_token')===null) {
      setSesion(false);
    } else {
      setSesion(true);
    }
  }, [location]);

  function establecerAtributosHeader(location) {
    if(location.pathname === "/") {
      return atributosInicio();
    }
    else if(location.pathname === "/contact") {
      return atributosNosotros();
    }
  }

  function atributosInicio() {
    return (
      <nav className="hidden md:flex space-x-6">
          <a href="#inicio" className="hover:text-gray-200 transition ">Inicio</a>
          <a href="#photo" className="hover:text-gray-200 transition ">Analizar</a>
          <a href="#caracte" className="hover:text-gray-200 transition " >Caracteristicas</a>
          <a href="#faq" className="hover:text-gray-200 transition">Preguntas Frecuentes</a>
      </nav>
    )
  }

  function atributosNosotros() {
    return(
      <nav className="hidden md:flex space-x-6">
          <h2>Seguinos en Linkedin!</h2>
      </nav>
    )
  }


  function cerrarSesion() {
    localStorage.removeItem('access_token');
    setSesion(false)
    navigate("/login");
  }

  return (
    <header className="bg-[#007BFF] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo / Marca */}
        <Link to="/">
        <div className="flex items-center">
            <img src="/logo.png" alt="InfoFierro Logo" className="h-15 w-auto rounded" />
        </div>
        </Link>

        {/* Navegación */}
        {establecerAtributosHeader(location)}

        {/* Botón de llamada a la acción */}
        {sesion ?
        (<div className="hidden md:block">
          <button
            onClick={cerrarSesion}
            className="bg-[#FF6F00] hover:bg-[#0C6CB2] text-white font-semibold py-2 px-4 rounded transition"
          >
            Cerrar Sesion
          </button>
        </div>) :
        (
          <div className="hidden md:block">
          <a
            href="/login"
            className="bg-[#FF6F00] hover:bg-[#0C6CB2] text-white font-semibold py-2 px-4 rounded transition"
          >
            Ingresar
          </a>
        </div>)
        }
        

        {/* Botón solo visible en mobile */}
        <div className="md:hidden">
          {sesion ? (
            <button
              onClick={cerrarSesion}
              className="bg-[#FF6F00] hover:bg-[#0C6CB2] text-white font-semibold py-2 px-4 rounded transition"
            >
              Cerrar Sesion
            </button>
          ) : (
            <a
              href="/login"
              className="bg-[#FF6F00] hover:bg-[#0C6CB2] text-white font-semibold py-2 px-4 rounded transition"
            >
              Ingresar
            </a>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
