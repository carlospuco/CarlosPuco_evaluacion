import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import usuarioImage from '../../utils/imgs/logo3.png'; 
import tittleleftimage from '../../utils/imgs/logo1.png'; 
import tittlerightimage from '../../utils/imgs/logo2.png'; 
import './SearchBar.css'; // Importar el archivo CSS

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); // Llama a la función onSearch con el valor actual del término de búsqueda
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <div className="search-bar-header">
          <img
            className="logo-left"
            src={tittleleftimage}
            alt="Left logo"
          />
          <h2>BUSCADOR DE USUARIOS</h2>
          <img
            className="logo-right"
            src={tittlerightimage}
            alt="Right logo"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="NOMBRE DE USUARIO"
            value={searchTerm}
            onChange={handleInputChange}
          />
         
          <button className="search-button" onClick={handleSearch}>
            <FaSearch />
          </button>
        
       
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
