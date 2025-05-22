function FaqSection() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Preguntas Frecuentes</h1>
      <dl className="space-y-4">
        <div>
          <dt className="font-semibold">¿Cómo funciona InfoFierro?</dt>
          <dd className="ml-4">InfoFierro analiza tu auto usando inteligencia artificial para darte datos precisos.</dd>
        </div>
        <div>
          <dt className="font-semibold">¿Qué datos necesito para analizar mi vehículo?</dt>
          <dd className="ml-4">Solo necesitas una foto clara de la chapa patente del vehículo.</dd>
        </div>
        <div>
          <dt className="font-semibold">¿Es gratuito el servicio?</dt>
          <dd className="ml-4">Sí, ofrecemos un plan gratuito con opciones premium próximamente.</dd>
        </div>
        <div>
          <dt className="font-semibold">¿Cómo puedo contactarme con soporte?</dt>
          <dd className="ml-4">Podés enviarnos un email a soporte@infofierro.com.</dd>
        </div>
      </dl>
    </div>
  );
}
export default FaqSection;