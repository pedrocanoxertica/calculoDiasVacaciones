/**
 * Esta función sirve para realizar el cálculo de la diferencia en días entre dos fechas.
 * 
 * @param {String} fechaInicio fecha en que inicia el periodo vacacional.
 * @param {String} fechaFin fecha en que termina el periodo vacacional.
 * @returns el número de días existente entre una fecha y otra.
 */
function conteoDias(fechaInicio,fechaFin) {
  /**
   * se crean los objetos date para realizar el cálculo
   */
  fechaInicio = new Date(fechaInicio);
  fechaFin = new Date(fechaFin);
  
  /**
   * se obtiene la cantidad de tiempo en milisegundos (calculados desde enero 1, 1970 00:00:00).
   */
  fechaInicio = fechaInicio.getTime();
  fechaFin = fechaFin.getTime();

  /**
   * se hace el cálculo de la diferencia en milisegundos.
   */
  let diferencia = fechaFin - fechaInicio;

  /**
   * se hace la conversión del resultado obtenido a días.
   */
  let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  
  return dias;
}
