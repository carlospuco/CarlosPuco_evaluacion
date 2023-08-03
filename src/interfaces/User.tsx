export interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
    gender: string;
    phone_number: string;
    date_of_birth: string;
    employment: {
      title: string;
      key_skill: string;
    };
    address: {
      city: string;
      street_name: string;
    };
    subscription: {
      plan: string;
    };
  }
  
  // Agrega esta línea para convertir el archivo en un módulo
  export {};
  