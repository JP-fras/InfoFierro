import { useState } from "react";

function Recuperar(){

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [newPassword, setNewPassword] = useState("");
  const [mensaje, setMensaje] = useState(null);
  const [error, setError] = useState(null);

    const handleActualizar = async (e) => {
    e.preventDefault();
    setMensajeRecuperar(null);
    setErrorRecuperar(null);

    try {
      const res = await fetch("https://apigeninfofierro.onrender.com/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword: newPassword }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message);
      }

      setMensaje("Contraseña actualizada con exito");
    } catch (err) {
      setError(err.message);
    }
  };

    return(
        <p>hola</p>
    )
}
export default Recuperar;