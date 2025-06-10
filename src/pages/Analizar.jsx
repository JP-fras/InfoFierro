import { useState } from "react";
import PhotoLoader from "../components/sections/PhotoUploader";

function Analizar(){

return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/fondo.svg)" }}>
        <PhotoLoader />
    </div>
    );
}
export default Analizar;