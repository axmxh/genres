import React from 'react';

const Pagination = ({ perPage, totalArtists, paginate }) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalArtists / perPage); i++) {
    pages.push(i);
  }

  return (
    <div className='ui pagination menu'>
      {pages.map(page => (
        <span
          key={page}
          className='item'
          style={{ cursor: 'pointer' }}
          onClick={() => paginate(page)}
        >
          {page}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
