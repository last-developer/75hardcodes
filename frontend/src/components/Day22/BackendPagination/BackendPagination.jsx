import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../../Day21/Pagination/Pagination.css'

export default function BackendPagination() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/product/getproducts?page=${currentPage}`)
            .then(response => {
                setProducts(response.data.products);
                setTotalPages(response.data.totalPages);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [currentPage]);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <section className="pagination-container">
            {/* Render products */}
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        {product.name} - {product.description}
                    </li>
                ))}
            </ul>

            {/* Render pagination */}
            <div className="pagination-controls">
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>&lt;</button>

                {/* Render the first page */}
                <button className={currentPage === 1 ? "active" : ""} onClick={() => handlePageChange(1)}>1</button>

                {/* Dots before currentPage */}
                {currentPage > 4 && <span>...</span>}

                {/* Render 3 pages before current page, if applicable */}
                {[...Array(3).keys()].reverse().map(number => currentPage - (number + 1)).filter(page => page > 1).map(page => (
                    <button key={page} className={currentPage === page ? "active" : ""} onClick={() => handlePageChange(page)}>{page}</button>
                ))}

                {/* Render the current page if it's not the first or last */}
                {currentPage !== 1 && currentPage !== totalPages &&
                    <button className="active" onClick={() => handlePageChange(currentPage)}>{currentPage}</button>
                }

                {/* Render 3 pages after current page, if applicable */}
                {[...Array(3).keys()].map(number => currentPage + (number + 1)).filter(page => page < totalPages).map(page => (
                    <button key={page} className={currentPage === page ? "active" : ""} onClick={() => handlePageChange(page)}>{page}</button>
                ))}

                {/* Dots after currentPage */}
                {currentPage < totalPages - 3 && <span>...</span>}

                {/* Render the last page if it's not the first page */}
                {totalPages !== 1 &&
                    <button className={currentPage === totalPages ? "active" : ""} onClick={() => handlePageChange(totalPages)}>{totalPages}</button>
                }

                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>&gt;</button>
            </div>

        </section>
    );
}
