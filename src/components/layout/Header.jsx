
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

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


  return (
    <header className="bg-[#007BFF] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo / Marca */}
        <div className="flex items-center">
            <img src="/logo.png" alt="InfoFierro Logo" className="h-15 w-auto rounded" />
        </div>

        {/* Navegación */}
        {establecerAtributosHeader(location)}

        {/* Botón de llamada a la acción */}
        <div className="hidden md:block">
          <a
            href="/login"
            className="bg-[#FF6F00] hover:bg-[#0C6CB2] text-white font-semibold py-2 px-4 rounded transition"
          >
            Ingresar
          </a>
        </div>

        {/* Menú mobile (opcional) */}
        <div className="md:hidden">
          {/* Aquí podés agregar un ícono de menú hamburguesa si querés */}
        </div>
      </div>
    </header>
  );
};

export default Header;
