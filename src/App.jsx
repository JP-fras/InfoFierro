// src/App.jsx
import React, { useState } from "react";
import Layout from "./components/layout/Layout";
import Inicio from "./pages/Inicio";
import Contact from "./components/sections/Contact";
import Nosotros from "./components/sections/Nosotros";

function App() {
  const [seccion, setSeccion] = useState("inicio");
  const [emailSeleccionado, setEmailSeleccionado] = useState(null);

  const renderSeccion = () => {
    switch (seccion) {
      case "inicio":
        return <Inicio />;
      case "nosotros":
        return (
          <Nosotros
            onNavigate={setSeccion}
            setEmailSeleccionado={setEmailSeleccionado}
          />
        );
      case "contacto":
        return <Contact emailSeleccionado={emailSeleccionado} />;
      default:
        return <Inicio />;
    }
  };

  return <Layout onNavigate={setSeccion}>{renderSeccion()}</Layout>;
}

export default App;
