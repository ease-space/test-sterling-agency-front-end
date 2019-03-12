import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';

import OnlineTimeline from '../../../../../components/Pages/Public/Statistics/OnlineTimeline/index';

const mapStateToProps = state => {
  return {
    onlineMap: state.ui.statistics.onlineMap,
  };
};

@compose(connect(mapStateToProps))
class OnlineTimelineContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
    onlineMap: PropTypes.array,
  };

  render() {
    const { className, onlineMap } = this.props;

    return <OnlineTimeline className={className} onlineMap={onlineMap} />;
  }
}

export default OnlineTimelineContainer;
