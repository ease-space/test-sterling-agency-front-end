import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';

import Graph from '../../../../../../components/Pages/Public/Statistics/OnlineTimeline/Graph/index';

const mapStateToProps = state => {
  return {
    onlineMap: state.ui.statistics.onlineMap,
  };
};

@compose(connect(mapStateToProps))
class GraphContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    axisLineWeight: PropTypes.number,
    step: PropTypes.number,
    scale: PropTypes.number,
    colorAxis: PropTypes.string,
    colorGrid: PropTypes.string,
    onlineMap: PropTypes.array,
  };

  render() {
    const {
      className,
      width,
      height,
      axisLineWeight,
      step,
      scale,
      colorAxis,
      colorGrid,
      onlineMap,
    } = this.props;

    return (
      <Graph
        className={className}
        width={width}
        height={height}
        axisLineWeight={axisLineWeight}
        step={step}
        scale={scale}
        colorAxis={colorAxis}
        colorGrid={colorGrid}
        onlineMap={onlineMap}
      />
    );
  }
}

export default GraphContainer;
