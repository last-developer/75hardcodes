import React, { useState } from 'react';
import './Pagination.css';

const DUMMY_DATA = Array.from({ length: 20 }, (_, index) => `Product ${index + 1}`);

const ITEMS_PER_PAGE = 5;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(DUMMY_DATA.length / ITEMS_PER_PAGE);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = DUMMY_DATA.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="pagination-container">
      <ul>
        {paginatedData.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="pagination-controls">
        <button onClick={handlePrevious} disabled={currentPage === 1}>&lt;</button>
        
        {Array.from({ length: totalPages }).map((_, index) => {
          if (index === 0 || index === totalPages - 1 || (index >= currentPage - 2 && index <= currentPage)) {
            return <button key={index} onClick={() => setCurrentPage(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>{index + 1}</button>
          } else if (index === currentPage - 3 || index === currentPage + 1) {
            return <span key={index}>...</span>
          }
          return null;
        })}
        
        <button onClick={handleNext} disabled={currentPage === totalPages}>&gt;</button>
      </div>
    </section>
  );
};

export default Pagination;