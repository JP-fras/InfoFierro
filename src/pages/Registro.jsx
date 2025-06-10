import { useState } from "react";
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';


function Registro(){
    
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [isCreado, setCreado] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      table: "usuarios",
      data: {
        nombre,
        email,
        contrasena,
      },
    };

    try{
        const response= await fetch ("https://apigeninfofierro.onrender.com/crear-usuario",
        { method: "POST", 
          headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),});

        if (response.ok) {
        setMensaje("Usuario creado correctamente");
        setNombre("");
        setEmail("");
        setContrasena("");
        setCreado(true);
        } else {
        const errorData = await response.json();
        setMensaje(`❌ Error: ${errorData.detail || "No se pudo crear el usuario"}`);
      }          
    } catch (error){
        console.error("Error al crear usuario:", error);
        setMensaje("❌ Error de red o del servidor");
    }}


  return (
    <div>
        {
          isCreado ? (
          <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/fondo.svg)" }}>
            <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
              <h2 className="text-2xl font-bold mb-6 text-center">{mensaje}</h2>

             <label className="block mb-6">
                <span className="block text-sm font-medium text-gray-700">Por favor, inicia sesion con tu nueva cuenta</span>
              </label>

              <Link to="/login">
              <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700" 
               >Ir a Inicio de Sesion
              </button>
              </Link>
              
          </div>
        </div>
          ) : (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/fondo.svg)" }}>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        
            <h2 className="text-2xl font-bold mb-6 text-center">Registrarse</h2>

            <label className="block mb-6">
              <span className="block text-sm font-medium text-gray-700">Nombre</span>
              <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} className="mt-1 p-2 w-full border rounded" required/>
            </label>

            <label className="block mb-6">
              <span className="block text-sm font-medium text-gray-700">Email</span>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 p-2 w-full border rounded" required/>
            </label>
            
            <label className="block mb-6">
              <span className="block text-sm font-medium text-gray-700">Contraseña</span>
              <input type="password" placeholder="Contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)} className="mt-1 p-2 w-full border rounded" required/>
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
                  Crear Cuenta
                </>
              )}
            </button>
    
     {mensaje && <p className="mt-4 text-center text-sm">{mensaje}</p>}

      </form>
    </div>
          )
        } 
    </div>
        
    )
}
export default Registro;