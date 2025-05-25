import React from "react";

const Contact = ({ emailSeleccionado }) => {
  const contactos = [
    {
      nombre: "Juan P Frascino",
      email: "frascinojuanpablo@gmail.com",
    },
    {
      nombre: "Ayrton G Moreira",
      email: "kinkimoreira9@gmail.com",
    },
    {
      nombre: "Ramiro E Raigorodsky",
      email: "ramiraigorodsky@gmail.com",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-6 flex items-center justify-center">
      <div className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          Contacto del Equipo
        </h1>
        <ul className="space-y-6">
          {contactos.map((contacto, index) => {
            const seleccionado = contacto.email === emailSeleccionado;
            return (
              <li
                key={index}
                className={`flex items-center gap-4 p-5 rounded-xl border shadow-sm ${
                  seleccionado
                    ? "bg-blue-100 border-blue-400"
                    : "bg-white border-gray-200"
                }`}
              >
                {contacto.foto ? (
                  <img
                    src={contacto.foto}
                    alt={contacto.nombre}
                    className="w-14 h-14 rounded-full object-cover border border-gray-300 shadow"
                  />
                ) : (
                  <div className="w-14 h-14" />
                )}

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
                  <span
                    className={`font-semibold text-lg ${
                      seleccionado ? "text-blue-800" : "text-gray-900"
                    }`}
                  >
                    {contacto.nombre}
                  </span>
                  <a
                    href={`mailto:${contacto.email}`}
                    className={`mt-1 sm:mt-0 text-blue-600 hover:underline ${
                      seleccionado ? "font-bold" : ""
                    }`}
                  >
                    {contacto.email}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Contact;