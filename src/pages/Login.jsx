import { useState } from "react";

function Login(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // limpiar errores previos

    try {
      const response = await fetch("https://apigeninfofierro.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Usuario o contrasena incorrectos");
      }

      const data = await response.json();
      console.log("Login exitoso:", data);

      // Aquí puedes redirigir o guardar el token, etc.
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
      const res = await fetch("https://apigeninfofierro.onrender.com/login", {
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

    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/public/fondo.svg)" }}>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        
            <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>

            <label className="block mb-4">
            <span className="block text-sm font-medium text-gray-700">Email</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 p-2 w-full border rounded" required
            /></label>

            <label className="block mb-6">
            <span className="block text-sm font-medium text-gray-700">Contraseña</span>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 p-2 w-full border rounded" required
            />
            </label>

            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >Iniciar sesión
            </button>
      

          <p className="mt-4 text-center text-sm">
            ¿Olvidaste tu contraseña?{" "}
            <button
            onClick={() => setRecuperarVisible(!recuperarVisible)}
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
    <div>

        <form onSubmit={handleRecuperar} className="mt-6">
            <h3 className="text-lg font-semibold mb-4 text-center">
              Recuperar contraseña
            </h3>

            {mensajeRecuperar && (
              <p className="mb-4 text-center text-green-600">{mensajeRecuperar}</p>
            )}
            {errorRecuperar && (
              <p className="mb-4 text-center text-red-600">{errorRecuperar}</p>
            )}

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
          
        )}
    </div>
    );
}
export default Login;