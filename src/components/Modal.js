import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Pagination from './Pagination';

const Model = props => {
  const [current, setCurrent] = useState(1);
  const [perPage] = useState(10);

  // Get current artists
  const end = current * perPage;
  const start = end - perPage;
  const currentPage = props.artists.slice(start, end);
  const paginate = page => setCurrent(page);

  const renderArtists = () => {
    return currentPage.map(artist => {
      return (
        <div className='ui fluid card' key={artist.id}>
          <div className='image'>
            <img alt={artist.name} src={artist.picture_medium} />
          </div>
          <div className='content'>
            <span className='header'>{artist.name}</span>
          </div>
        </div>
      );
    });
  };

  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className='ui dimmer modals visible active'>
      <div
        onClick={e => e.stopPropagation()}
        className='ui standard modal visible active'
      >
        <i className='close icon' onClick={props.onDismiss}></i>
        <div className='header'>Artists</div>
        <div className='content'>
          {props.content}
          <div className='ui five cards'>{renderArtists()}</div>
        </div>
        <div className='actions'>
          <Pagination
            current={current}
            perPage={perPage}
            totalArtists={props.artists.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Model;
