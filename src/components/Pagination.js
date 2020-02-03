import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.span`
  cursor: pointer;
`;

const Pagination = ({ perPage, totalArtists, paginate, current }) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalArtists / perPage); i++) {
    pages.push(i);
  }

  return (
    <div className='ui pagination menu'>
      {pages.map(page => (
        <PaginationContainer
          key={page}
          onClick={() => paginate(page)}
          className={current === page ? 'active item' : 'item'}
        >
          {page}
        </PaginationContainer>
      ))}
    </div>
  );
};

export default Pagination;
