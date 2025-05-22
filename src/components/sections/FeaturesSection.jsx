export default function FeaturesSection() {
    return(
    <section className="bg-white py-16 px-6 md:px-16" id="caracteristicas">
  <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10 text-center">Caracteristicas</h2>
     <h1 className="text-2xl md:text-2xl font-bold text-blue-700 mb-10">InfoFierro busca brindar a los clientes una herramienta que facilite la tarea de identificar y analizar distintos autos, de forma rápida, precisa y segura.</h1>
  
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {/* Característica 1 */}
    <div className="flex items-start space-x-4">
      <div className="w-4 h-4 bg-blue-700 rounded-full mt-1.5"></div>
      <div>
        <h3 className="text-xl font-semibold text-blue-900">Reconocimiento inteligente</h3>
        <p className="text-gray-700">Detectamos automáticamente símbolos de fierros en imágenes.</p>
      </div>
    </div>

    {/* Característica 2 */}
    <div className="flex items-start space-x-4">
      <div className="w-4 h-4 bg-blue-700 rounded-full mt-1.5"></div>
      <div>
        <h3 className="text-xl font-semibold text-blue-900">Análisis instantáneo</h3>
        <p className="text-gray-700">Recibe resultados en segundos con IA entrenada.</p>
      </div>
    </div>

    {/* Característica 3 */}
    <div className="flex items-start space-x-4">
      <div className="w-4 h-4 bg-blue-700 rounded-full mt-1.5"></div>
      <div>
        <h3 className="text-xl font-semibold text-blue-900">Acceso gratuito</h3>
        <p className="text-gray-700">Sin pagos ni registros obligatorios.</p>
      </div>
    </div>

    {/* Característica 4 */}
    <div className="flex items-start space-x-4">
      <div className="w-4 h-4 bg-blue-700 rounded-full mt-1.5"></div>
      <div>
        <h3 className="text-xl font-semibold text-blue-900">Privacidad protegida</h3>
        <p className="text-gray-700">No almacenamos tus imágenes. 100% anónimo.</p>
      </div>
    </div>

    {/* Característica 5 */}
    <div className="flex items-start space-x-4">
      <div className="w-4 h-4 bg-blue-700 rounded-full mt-1.5"></div>
      <div>
        <h3 className="text-xl font-semibold text-blue-900">Compatible con URL o archivo</h3>
        <p className="text-gray-700">Sube una imagen o pega un enlace directo.</p>
      </div>
    </div>

    {/* Característica 6 */}
    <div className="flex items-start space-x-4">
      <div className="w-4 h-4 bg-blue-700 rounded-full mt-1.5"></div>
      <div>
        <h3 className="text-xl font-semibold text-blue-900">Funciona en todos tus dispositivos</h3>
        <p className="text-gray-700">Desde móvil, tablet o PC sin instalar nada.</p>
      </div>
    </div>
  </div>
</section>
    )
}