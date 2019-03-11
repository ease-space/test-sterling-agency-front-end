import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Footer from '../../../components/AppWrapper/Footer/index';

import { statisticsActionsAsync } from '../../../flux-saga/bus/fetch/statistics/saga/asyncActions';

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        ...statisticsActionsAsync,
      },
      dispatch,
    ),
  };
};

const mapStateToProps = () => {
  return {};
};

@compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)
class FooterContainer extends Component {
  static propTypes = {
    actions: PropTypes.object,
    className: PropTypes.string,
  };

  componentDidMount() {
    const { actions } = this.props;
    actions.setFetchStatisticsAsync();
  }

  render() {
    const { className } = this.props;

    return <Footer className={className} />;
  }
}

export default FooterContainer;
