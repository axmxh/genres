import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGenres } from '../actions';

//import GenreCard from './GnoreCard';

class Genres extends Component {
  componentDidMount() {
    this.props.fetchGenres();
  }

  renderGenres() {
    return this.props.genres.map(genre => {
      return (
        <Link
          //onClick={() => this.handleClick(genre.id)}
          to={`/${genre.id}/artists`}
          style={{ cursor: 'pointer' }}
          className='ui fluid card'
          key={genre.id}
        >
          <div className='image'>
            <img alt={genre.name} src={genre.picture_medium} />
          </div>
          <div className='content'>
            <span className='header'>{genre.name}</span>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className='ui grid' style={{ marginTop: '30px' }}>
        <h2 className='ui header'>Select Genre</h2>
        <div className='ui eight cards'>{this.renderGenres()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    genres: state.genres
  };
};

export default connect(mapStateToProps, { fetchGenres })(Genres);
