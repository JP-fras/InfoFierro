const Nosotros = ({ onNavigate, setEmailSeleccionado }) => {
  const equipo = [
    {
      nombre: "Juan Pablo Frascino",
      email: "frascinojuanpablo@gmail.com",
    },
    {
      nombre: "Ayrton Gustavo Moreira",
      email: "kinkimoreira9@gmail.com",
    },
    {
      nombre: "Ramiro Ezequiel Raigorodsky",
      email: "ramiraigorodsky@gmail.com",
    },
  ];

  const manejarSeleccion = (email) => {
    setEmailSeleccionado(email);
    onNavigate("contacto");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-gray-100 py-16 px-6 flex items-center justify-center">
      <div className="max-w-3xl w-full text-center bg-white rounded-3xl p-10 shadow-xl">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-8">
          Quiénes Somos
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Somos un equipo de estudiantes de la{" "}
          <strong>Licenciatura en Informática</strong> de la{" "}
          <strong>Universidad Nacional del Oeste</strong>, actualmente cursando
          el <strong>tercer año</strong> de la carrera.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Esta página es un proyecto académico desarrollado para la materia{" "}
          <strong>Interfaces de Usuarios y Tecnologías Web</strong>, donde
          aplicamos conocimientos sobre diseño, desarrollo frontend, backend y
          experiencia de usuario.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Nuestra aplicación, <strong>InfoFierro</strong>, permite subir una
          foto de un auto y obtener información relevante sobre su modelo,
          características y estimación de precio.
        </p>

        <p className="text-lg text-gray-700 mb-8">
          Apuntamos a combinar la inteligencia artificial con interfaces simples
          para ofrecer soluciones útiles y accesibles.
        </p>

        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          Equipo de desarrollo
        </h2>
        <ul className="space-y-4 text-lg">
          {equipo.map((miembro, index) => (
            <li
              key={index}
              className="flex items-center justify-center gap-3 text-gray-800"
            >
              <span className="text-2xl">👨‍💻</span>
              <button
                onClick={() => manejarSeleccion(miembro.email)}
                className="text-blue-600 hover:underline transition-colors"
              >
                {miembro.nombre}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Nosotros;
