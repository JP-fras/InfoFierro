import { useState } from 'react';
import { Camera, Upload, Check, Loader2, Car } from 'lucide-react';

function PhotoLoader() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [carData, setCarData] = useState(null);

  // Función para abrir la cámara nativa
const handleTakePhoto = () => {
  // Crear input file dinámicamente
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.capture = 'environment'; // 'user' para cámara frontal, 'environment' para trasera
  
  input.onchange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e.target.result;
        setPreview(base64Image);
        setImage(base64Image);
      };
      reader.readAsDataURL(file);
    }
  };
  
  input.click();
};

  // Función para cargar una imagen desde el dispositivo
  const handleUploadPhoto = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (event) => {
        setPreview(event.target.result);
        setImage(event.target.result);
        };
        reader.readAsDataURL(file);
    };

    // Función para enviar la imagen al API
    const handleSendImage = async () => {
        if (!image) return;

    setLoading(true);

    try {
        // Convertir base64 a Blob
        const response = await fetch(image);
        const blob = await response.blob();

        // Crear FormData
        const formData = new FormData();
        formData.append("file", blob, "photo.jpg");

        // Enviar al backend
        const res = await fetch('https://apigeninfofierro.onrender.com/analyze-car', {
        method: 'POST',
        body: formData, // No poner headers, fetch los maneja con FormData
        });

        const data = await res.json();
        console.log(data);
        setCarData(data);

        if (!res.ok) {
        throw new Error(data.detail || "Error al analizar la imagen");
        }

        // Manejar la respuesta correctamente
        alert("Análisis completado con éxito");
        
    } catch (error) {
        console.error("Error al enviar la imagen:", error);
        alert("Hubo un error al enviar la imagen");
    } finally {
        setLoading(false);
        
    }
      
  };

  // Función para formatear precios
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      maximumFractionDigits: 0
    }).format(price);
  };

  // Renderizar componente de resultados
  const ResultsComponent = ({ data }) => {
    if (!data) return null;
    
    const { datos_auto, precios_mercado } = data;
    
    return (
      <div className="mt-6 bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Datos del auto */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <Car className="mr-2" /> {datos_auto.marca} {datos_auto.modelo}
            </h2>
            <p className="text-gray-600 mt-1">{datos_auto.año}</p>
            
            <div className="mt-4">
              <h3 className="font-semibold text-gray-700">Especificaciones</h3>
              <ul className="mt-2 space-y-1">
                <li className="text-gray-600"><span className="font-medium">Motorización:</span> {datos_auto.motorizaciones}</li>
                <li className="text-gray-600"><span className="font-medium">Transmisión:</span> {datos_auto.transmision}</li>
                <li className="text-gray-600"><span className="font-medium">Tracción:</span> {datos_auto.tracciones}</li>
              </ul>
            </div>
            
            <div className="mt-4">
              <h3 className="font-semibold text-gray-700">Ventajas</h3>
              <ul className="mt-2 space-y-1">
                {datos_auto.ventajas.map((ventaja, index) => (
                  <li key={index} className="text-gray-600 flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                    {ventaja}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-4">
              <h3 className="font-semibold text-gray-700">Desventajas</h3>
              <ul className="mt-2 space-y-1">
                {datos_auto.desventajas.map((desventaja, index) => (
                  <li key={index} className="text-gray-600">• {desventaja}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Precios */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800">Precios en el mercado</h2>
            
            <div className="mt-4">
              <h3 className="font-semibold text-gray-700">Estadísticas</h3>
              <ul className="mt-2 space-y-1">
                <li className="text-gray-600"><span className="font-medium">Precio promedio:</span> {formatPrice(precios_mercado.estadisticas.precio_promedio)}</li>
                <li className="text-gray-600"><span className="font-medium">Precio mínimo:</span> {formatPrice(precios_mercado.estadisticas.precio_minimo)}</li>
                <li className="text-gray-600"><span className="font-medium">Precio máximo:</span> {formatPrice(precios_mercado.estadisticas.precio_maximo)}</li>
              </ul>
            </div>
            
            <div className="mt-4">
              <h3 className="font-semibold text-gray-700">Anuncios destacados</h3>
              <div className="mt-2 space-y-3">
                {precios_mercado.resultados.map((resultado, index) => (
                  <a 
                    key={index} 
                    href={resultado.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-3 border border-gray-200 rounded-md hover:bg-gray-50"
                  >
                    <div className="font-medium text-blue-600">{resultado.titulo}</div>
                    <div className="mt-1 text-gray-800 font-semibold">{formatPrice(resultado.precio)}</div>
                    <div className="mt-1 text-xs text-gray-500">{resultado.tipo.replace(/_/g, ' ')}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-5xl mx-auto mt-20 mb-20">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Reconocimiento de Auto</h1>
        
        {/* Previsualización de imagen */}
        {preview && (
          <div className="mb-4">
            <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src={preview} 
                alt="Previsualización" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
        
        {/* Botones de acción */}
        <div className="flex flex-wrap gap-3 mb-4" id='analizar'>
          <button
            onClick={handleTakePhoto}
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            disabled={loading}
          >
            <Camera className="mr-2 h-5 w-5" />
            Tomar foto
          </button>
          
          <label className="flex items-center bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 cursor-pointer">
            <Upload className="mr-2 h-5 w-5" />
            Subir imagen
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleUploadPhoto} 
              className="hidden"
              disabled={loading}
            />
          </label>
          
          {image && (
            <button
              onClick={handleSendImage}
              className="flex items-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Procesando...
                </>
              ) : (
                <>
                  <Check className="mr-2 h-5 w-5" />
                  Reconocer auto
                </>
              )}
            </button>
          )}
        </div>
        
        {/* Mensaje de instrucciones */}
        {!preview && (
          <div className="text-center p-10 border-2 border-dashed border-gray-300 rounded-lg">
            <p className="text-gray-500">
              Toma una foto del auto o sube una imagen para reconocerlo.
            </p>
          </div>
        )}
      </div>
      
      {/* Resultados */}
      <ResultsComponent data={carData} />
    </div>
  );
};

export default PhotoLoader;