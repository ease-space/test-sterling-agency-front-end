import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Router from '../../components/Routes';

const mapStateToProps = state => {
  return {
    authUser: state.fetch.user,
  };
};

@compose(
  withRouter,
  connect(mapStateToProps),
)
class RoutesContainer extends Component {
  static propTypes = {
    authUser: PropTypes.object,
  };

  render() {
    const { authUser } = this.props;

    return <Router authUser={authUser} />;
  }
}

export default RoutesContainer;
