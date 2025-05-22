import { useState } from "react";

export default function FaqSection() {
  const preguntas = [
    {
      pregunta: "¿Cómo funciona InfoFierro?",
      respuesta: "InfoFierro analiza tu auto usando inteligencia artificial para darte datos precisos.",
    },
    {
      pregunta: "¿Es gratis usar InfoFierro?",
      respuesta: "Sí, InfoFierro tiene una versión gratuita y opciones premium.",
    },
    {
      pregunta: "¿Qué datos necesito subir?",
      respuesta: "Solo necesitas subir una foto del auto o una URL de imagen.",
    },
    {
      pregunta: "¿Hay algún límite de uso por día?",
      respuesta: "Tienes un solo uso de prueba, si quieres analizar mas autos debes optar por opciones premium.",
    },
    {
      pregunta: "¿Dónde puedo enviar sugerencias o reportar errores?",
      respuesta: "Por medio de nuestro contacto puedes realizar estas acciones.",
    },

  ];

  const [abierta, setAbierta] = useState(null);

  const toggle = (index) => {
    setAbierta(abierta === index ? null : index);
  };
  

  return (
    <div className=" text-white py-12 px-6 md:px-16">
      <h1 className="text-4xl md:text-4xl font-bold mb-8 border-b-2 border-white pb-2">Preguntas Frecuentes</h1>
      <dl className="space-y-6">
        {preguntas.map((item, index) => (
          <div key={index}>
            <dt
              className="flex items-center cursor-pointer transition-all"
              onClick={() => toggle(index)}
            > 
              <span className="mr-2 text-blue-200 text-x1">•</span>
              <span className="text-2xl font-semibold cursor-pointer hover:underline hover:decoration-white hover:underline-offset-4 transition-all">
              {item.pregunta}  
              </span>
            </dt>
            {abierta === index && (
              <dd className="ml-4 mt-2 text-white text-lg transition-all duration-300">{item.respuesta}</dd>
            )}
          </div>
        ))}
      </dl>
    </div>
  );
}
