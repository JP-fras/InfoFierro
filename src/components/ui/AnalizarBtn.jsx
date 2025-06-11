import { Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

function AnalizarBtn() {

    return (
        <div className="mt-10 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-8 text-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        ¿Quieres saber más sobre un vehículo?
      </h2>
      <p className="text-gray-600 mb-6">
        Toma una foto, analiza la marca y modelo en segundos. Descubre su valor de mercado a tiempo real.
      </p>
      <Link to="/redirect-log">
        <button
          className="inline-flex items-center justify-center bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded-full shadow hover:bg-blue-700 transition-all duration-200"
        >
          <Camera className="mr-3 h-6 w-6" />
          Comenzar Análisis
        </button>
      </Link>
    </div>
    )
}

export default AnalizarBtn;