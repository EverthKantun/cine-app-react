// Servicio para manejar llamadas a APIs externas

export const fetchPromotions = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    if (!response.ok) {
      throw new Error('Error al cargar las promociones');
    }
    
    const data = await response.json();
    
    // Limitar a las primeras 12 promociones
    return data.slice(0, 12);
  } catch (error) {
    throw new Error(error.message || 'Error desconocido');
  }
};
