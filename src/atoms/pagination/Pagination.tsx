// Pagination.tsx

import React from 'react';
import './Pagination.css'

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const getDisplayedPages = () => {
    const totalDisplayPages = 3; // Número total de cuadros de paginación a mostrar
    const pagesToShow = [];

    // Mostrar los primeros 3 cuadros de paginación
    for (let i = 1; i <= Math.min(totalDisplayPages, totalPages); i++) {
      pagesToShow.push(i);
    }

    // Mostrar el número de página actual en el centro
    const midPage = Math.ceil(totalDisplayPages / 2);
    const startPage = Math.max(1, currentPage - midPage + 1);
    const endPage = Math.min(startPage + totalDisplayPages - 1, totalPages);

    // Agregar las páginas restantes hasta llegar al número de página actual
    for (let i = startPage; i <= Math.min(currentPage, endPage); i++) {
      if (!pagesToShow.includes(i)) {
        pagesToShow.push(i);
      }
    }

    // Si hay más páginas disponibles, mostrar la última página
    if (totalPages > totalDisplayPages) {
      pagesToShow.push(totalPages);
    }

    return pagesToShow;
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        {'<'}
      </button>
      {getDisplayedPages().map((page, index) => (
        <button
          key={index}
          className={page === currentPage ? 'current' : ''}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;