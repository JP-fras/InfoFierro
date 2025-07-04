import { useState } from "react";
import { Link } from "react-router-dom";
import { Loader2 } from 'lucide-react';

function Login(){
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState(null);
  const [isLog, setLog] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // limpiar errores previos
    setLoading(true);

    const payload = {
      email,
      contrasena,
    };

    try {
      const response = await fetch("https://apigeninfofierro.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log(payload);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Usuario o contrasena incorrectos");

      }

      const data = await response.json();
      console.log("Login exitoso:");

      // Guardar el token en localStorage
      localStorage.setItem('access_token', data.access_token);

      const token = localStorage.getItem('access_token');
      console.log(token);
      setLog(true);
      

    } catch (err) {
      console.error("Error:", err.message);
      setError(err.message);
    }
  };

  const [recuperarVisible, setRecuperarVisible] = useState(false);
  const [emailRecuperar, setEmailRecuperar] = useState("");
  const [mensajeRecuperar, setMensajeRecuperar] = useState(null);
  const [errorRecuperar, setErrorRecuperar] = useState(null);

  // Handle recuperar contraseña
  const handleRecuperar = async (e) => {
    e.preventDefault();
    setMensajeRecuperar(null);
    setErrorRecuperar(null);

    try {
      const res = await fetch("https://apigeninfofierro.onrender.com/login/recuperar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailRecuperar }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message);
      }

      setMensajeRecuperar("Te hemos enviado instrucciones a tu correo.");
      setEmailRecuperar("");
    } catch (err) {
      setErrorRecuperar(err.message);
    }
  };


return (
  <div>
  {!isLog ? (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/fondo.svg)" }}>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        
            <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>

            <label className="block mb-4">
            <span className="block text-sm font-medium text-gray-700">Email</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 p-2 w-full border rounded" required
            /></label>

            <label className="block mb-6">
            <span className="block text-sm font-medium text-gray-700">Contraseña</span>
            <input type="contrasena" value={contrasena} onChange={(e) => setContrasena(e.target.value)} className="mt-1 p-2 w-full border rounded" required
            />
            </label>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Procesando...
                </>
              ) : (
                <>
                  <h2 className="mr-2 h-2 w-2" />
                  Iniciar sesión
                </>
              )}
            </button>
      

          <p className="mt-4 text-center text-sm">
            ¿Olvidaste tu contraseña?{" "}
            <button
            onClick={() => setRecuperarVisible(true)}
            className="text-blue-600 hover:underline font-medium"
            >Recuperala aquí
              </button>
            </p>

          <p className="mt-4 text-center text-sm">
            ¿No tiene una cuenta?{" "}
            <a href="/login/registro"
            className="text-blue-600 hover:underline font-medium"
            >Registrarse
            </a>
          </p>
        </form>

        {recuperarVisible && (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-sm relative shadow-lg"> 
          <button
            className="absolute top-2 right-3 text-gray-600 hover:text-gray-800 text-xl font-bold"
            onClick={() => setRecuperarVisible(false)}
          >
            ✕
          </button>
          
        
            <h3 className="text-lg font-semibold mb-4 text-center">
              Recuperar contraseña
            </h3>

            {mensajeRecuperar && (
              <p className="mb-4 text-center text-green-600">{mensajeRecuperar}</p>
            )}
            {errorRecuperar && (
              <p className="mb-4 text-center text-red-600">{errorRecuperar}</p>
            )}
            
<form onSubmit={handleRecuperar}>
            <label className="block mb-4">
              <span className="block text-sm font-medium text-gray-700">
                Correo electrónico
              </span>
              <input
                type="email"
                value={emailRecuperar}
                onChange={(e) => setEmailRecuperar(e.target.value)}
                className="mt-1 p-2 w-full border rounded"
                required
              />
            </label>

            <button 
              type="submit"
              className="w-full bg-orange-600 text-white p-2 rounded hover:bg-orange-700"
            >
              Enviar instrucciones
            </button>
</form>
      </div>
    </div>
          
        )}
    </div>
  ):(
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/fondo.svg)" }}>
                <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                  <h2 className="text-2xl font-bold mb-6 text-center">Sesion Iniciada correctamente</h2>
    
                 <label className="block mb-6">
                    <span className="block text-sm font-medium text-gray-700">Ya puedes analizar autos</span>
                  </label>
    
                  <Link to="/analizar">
                  <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700" 
                   >Ir a Analizar Auto
                  </button>
                  </Link>
                  
              </div>
            </div>
  )}
  </div>
    );
}
export default Login;