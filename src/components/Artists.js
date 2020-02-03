import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArtists, clearArtists } from '../actions';
import history from '../history';
import NotFound from './NotFound';

import Modal from './Modal';

class Artists extends Component {
  componentDidMount() {
    this.props.fetchArtists(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearArtists();
  }

  render() {
    if (this.props.artists) {
      if (localStorage.getItem('ids').includes(this.props.match.params.id)) {
        return (
          <div>
            <Modal
              artists={this.props.artists}
              onDismiss={() => history.push('/')}
            />
          </div>
        );
      } else {
        return <NotFound />;
      }
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
