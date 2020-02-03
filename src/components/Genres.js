import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGenres } from '../actions';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  cursor: pointer;
`;

const GenresContainer = styled.div`
  margin-top: 30px;
`;

class Genres extends Component {
  genresIds = [];

  componentDidMount() {
    this.props.fetchGenres();
    this.componentDidUpdate();
  }
  componentDidUpdate() {
    localStorage.setItem('ids', this.genresIds);
  }

  renderGenres() {
    return this.props.genres.map(genre => {
      this.genresIds.push(genre.id);
      return (
        <StyledLink
          to={`/${genre.id}/artists`}
          className='ui fluid card'
          key={genre.id}
        >
          <div className='image'>
            <img alt={genre.name} src={genre.picture_medium} />
          </div>
          <div className='content'>
            <span className='header'>{genre.name}</span>
          </div>
        </StyledLink>
      );
    });
  }

  render() {
    return (
      <GenresContainer>
        <div className='ui grid'>
          <h2 className='ui header'>Select Genre</h2>
          <div className='ui eight cards'>{this.renderGenres()}</div>
        </div>
      </GenresContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    genres: state.genres
  };
};

export default connect(mapStateToProps, { fetchGenres })(Genres);
