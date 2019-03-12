import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const rect = props => {
  const { ctx, x, y, width, height, fillStyle } = props;
  ctx.fillStyle = fillStyle;
  ctx.fillRect(x, y, width, height);
};

class Graph extends Component {
  static propTypes = {
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    axisLineWeight: PropTypes.number,
    step: PropTypes.number,
    scale: PropTypes.number,
    colorAxis: PropTypes.string,
    colorGrid: PropTypes.string,
    onlineMap: PropTypes.array.isRequired,
  };

  static defaultProps = {
    width: 500,
    height: 300,
    axisLineWeight: 2,
    step: 40,
    scale: 1,
    colorAxis: '#2196f3',
    colorGrid: '#90caf9',
  };

  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    const {
      width,
      height,
      axisLineWeight,
      step,
      scale,
      colorAxis,
      colorGrid,
    } = this.props;

    const ctx = this.canvas.getContext('2d');
    ctx.clearRect(0, 0, width, height);

    const realStep = Math.trunc(step * scale);
    const countVerticalStep = Math.trunc(width / realStep);
    const countHorizontalStep = Math.trunc(height / realStep);
    const gridLineWeight = Math.trunc(axisLineWeight / 2);

    rect({
      ctx,
      x: 0,
      y: 0,
      width: axisLineWeight,
      height: height,
      fillStyle: colorAxis,
    });
    rect({
      ctx,
      x: width - axisLineWeight,
      y: 0,
      width: axisLineWeight,
      height: height,
      fillStyle: colorAxis,
    });
    rect({
      ctx,
      x: 0,
      y: 0,
      width: width,
      height: axisLineWeight,
      fillStyle: colorAxis,
    });
    rect({
      ctx,
      x: 0,
      y: height - axisLineWeight,
      width: width,
      height: axisLineWeight,
      fillStyle: colorAxis,
    });

    for (let i = 0; i <= countVerticalStep; i++) {
      const step = Math.trunc(i * realStep - gridLineWeight / 2);
      if (width - step > axisLineWeight && step > 0) {
        rect({
          ctx,
          x: step,
          y: 0,
          width: 1,
          height: height,
          fillStyle: colorGrid,
        });
      }
    }

    for (let i = 0; i <= countHorizontalStep; i++) {
      const step = Math.trunc(i * realStep - gridLineWeight / 2);
      if (height - step > axisLineWeight && step > 0) {
        rect({
          ctx,
          x: 0,
          y: height - step,
          width: width,
          height: gridLineWeight,
          fillStyle: colorGrid,
        });
      }
    }
  }

  render() {
    const { className, width, height } = this.props;

    return (
      <div className={classNames(['graph', className])}>
        <canvas
          ref={element => (this.canvas = element)}
          width={width}
          height={height}
        />
      </div>
    );
  }
}

export default Graph;
