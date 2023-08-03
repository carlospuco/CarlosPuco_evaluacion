import axios from 'axios';
import { Client } from './types';

// Función para obtener los datos de la API
export async function fetchClientsData(): Promise<Client[]> {
  try {
    const response = await axios.get('https://random-data-api.com/api/v2/users');
    const clientsData = response.data as Client[];
    console.log(clientsData); // Imprimir los datos de los clientes en la consola
    return clientsData;
  } catch (error) {
    console.error('Error fetching clients data:', error);
    return [];
  }
}
