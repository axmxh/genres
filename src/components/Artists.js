import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArtists, clearArtists } from '../actions';
import history from '../history';

import Modal from './Modal';

class Artists extends Component {
  componentDidMount() {
    this.props.fetchArtists(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearArtists();
  }

  //   renderArtists() {
  //     return this.props.artists.map(artist => {
  //       return (
  //         <div className='ui fluid card' key={artist.id}>
  //           <div className='image'>
  //             <img alt={artist.name} src={artist.picture_medium} />
  //           </div>
  //           <div className='content'>
  //             <span className='header'>{artist.name}</span>
  //           </div>
  //         </div>
  //       );
  //     });
  //   }

  render() {
    if (this.props.artists) {
      return (
        <div>
          <Modal
            artists={this.props.artists}
            // content={this.renderArtists()}
            onDismiss={() => history.push('/')}
          />
        </div>
      );
    }
    return <Modal content='Loading...' />;
  }
}

const mapStateToProps = state => {
  return {
    artists: state.artists
  };
};

export default connect(mapStateToProps, { fetchArtists, clearArtists })(
  Artists
);
