import React, { useEffect, useState } from 'react';
import { User } from '../interfaces/User';
import axios from 'axios';

import SearchBar from '../atoms/search-bard/SearchBar';
import Pagination from '../atoms/pagination/Pagination';
import UserList from '../molecules/UsersList';

import './HomePage.css'

const ITEMS_PER_PAGE = 6; // Número máximo de usuarios por página

const MyComponent: React.FC = () => {
  const [users, setUsers] = useState<User[] | undefined>(undefined);
  const [filteredUsers, setFilteredUsers] = useState<User[] | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1); // Página actual

  useEffect(() => {
    // Llama a la API para obtener los usuarios
    axios
      .get<User[]>('https://random-data-api.com/api/v2/users?size=30') // Se obtienen 100 usuarios para mayor flexibilidad en la paginación
      .then((response) => {
        setUsers(response.data);
        setFilteredUsers(response.data);
      })
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  const handleSearch = (searchTerm: string) => {
    setCurrentPage(1); // Resetear la página actual al hacer una nueva búsqueda

    if (!searchTerm) {
      setFilteredUsers(users); // Mostrar todos los usuarios si el término de búsqueda está vacío
    } else {
      const filtered = users?.filter((user) =>
        user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  };

  // Lógica para obtener los usuarios de la página actual
  const indexOfLastUser = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstUser = indexOfLastUser - ITEMS_PER_PAGE;
  const currentUsers = filteredUsers?.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {currentUsers ? (
        <UserList users={currentUsers} />
      ) : (
        <p className='loading'>Loading...</p>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredUsers?.length! / ITEMS_PER_PAGE)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MyComponent;
