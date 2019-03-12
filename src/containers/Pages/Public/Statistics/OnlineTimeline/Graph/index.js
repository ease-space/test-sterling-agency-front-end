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
    actions: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]),
    width: PropTypes.number,
    height: PropTypes.number,
    axisLineWeight: PropTypes.number,
    step: PropTypes.number,
    valueInX: PropTypes.number,
    valueInY: PropTypes.number,
    scale: PropTypes.number,
    fontSize: PropTypes.number,
    valuesPanelWeight: PropTypes.number,
    colorAxis: PropTypes.string,
    colorGrid: PropTypes.string,
    onlineMap: PropTypes.array,
  };

  render() {
    const {
      className,
      actions,
      width,
      height,
      axisLineWeight,
      step,
      valueInX,
      valueInY,
      scale,
      fontSize,
      valuesPanelWeight,
      colorAxis,
      colorGrid,
      onlineMap,
    } = this.props;

    return (
      <Graph
        className={className}
        actions={actions}
        width={width}
        height={height}
        axisLineWeight={axisLineWeight}
        step={step}
        valueInX={valueInX}
        valueInY={valueInY}
        scale={scale}
        colorAxis={colorAxis}
        colorGrid={colorGrid}
        fontSize={fontSize}
        valuesPanelWeight={valuesPanelWeight}
        onlineMap={onlineMap}
      />
    );
  }
}

export default GraphContainer;
