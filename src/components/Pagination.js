import React from 'react';

const Pagination = ({ perPage, totalArtists, paginate, current }) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalArtists / perPage); i++) {
    pages.push(i);
  }

  return (
    <div className='ui pagination menu'>
      {pages.map(page => (
        <span
          key={page}
          style={{ cursor: 'pointer' }}
          onClick={() => paginate(page)}
          className={current === page ? 'active item' : 'item'}
        >
          {page}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
