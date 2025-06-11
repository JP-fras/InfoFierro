import { useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';

function RedirectLog() { 
    const [redirectTo, setRedirectTo] = useState(null);
    
    useEffect(() => {
        if(localStorage.getItem('access_token')==null) {
            setRedirectTo("login");
        } else {
            setRedirectTo("analizar");
        }
    }, []);

    if (redirectTo === "login") {
        return (
            <div>
                <h1>Redirigiendo a Inicio de sesión...</h1>
                <Navigate to="/login" />
            </div>
        );
    }

    if (redirectTo === "analizar") {
        return (
            <div>
                <h1>Redirigiendo a Analizar Vehículo...</h1>
                <Navigate to="/analizar" />
            </div>
        );
    }

    return <div>Verificando sesión...</div>;
}

export default RedirectLog;