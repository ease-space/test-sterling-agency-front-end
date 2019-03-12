import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

class Graph extends Component {
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
    onlineMap: PropTypes.array.isRequired,
  };

  static defaultProps = {
    width: 500,
    height: 300,
    axisLineWeight: 2,
    step: 40,
    valueInX: 100,
    valueInY: 5,
    scale: 1,
    fontSize: 14,
    valuesPanelWeight: 30,
    colorAxis: '#2196f3',
    colorGrid: '#90caf9',
  };

  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  rect = props => {
    const { ctx, x, y, width, height, fillStyle } = props;
    ctx.fillStyle = fillStyle;
    ctx.fillRect(x, y, width, height);
  };

  text = props => {
    const { ctx, x, y, fillStyle, text, fontSize } = props;
    ctx.fillStyle = fillStyle;
    ctx.font = `normal ${fontSize}px PT Sans`;
    ctx.fillText(text, x, y);
  };

  updateCanvas() {
    const {
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
    } = this.props;

    const realWidth = width + valuesPanelWeight;
    const realHeight = height + valuesPanelWeight;

    const ctx = this.canvas.getContext('2d');
    ctx.clearRect(0, 0, realWidth, realHeight);

    const realStep = Math.trunc(step * scale);
    const countVerticalStep = Math.trunc(width / realStep);
    const countHorizontalStep = Math.trunc(height / realStep);
    const gridLineWeight = Math.trunc(axisLineWeight / 2);

    const scaledFontSize = fontSize * scale;
    const fontSizeReal =
      scaledFontSize < 17 && scaledFontSize > 10
        ? scaledFontSize
        : scaledFontSize > 17
        ? 17
        : 10;

    const realTextHeight = (fontSizeReal * 0.8) / 2;
    const realTextWidth = (fontSizeReal * 0.6) / 2;

    this.rect({
      ctx,
      x: valuesPanelWeight,
      y: valuesPanelWeight,
      width: axisLineWeight,
      height: height,
      fillStyle: colorAxis,
    });
    this.rect({
      ctx,
      x: width - axisLineWeight + valuesPanelWeight,
      y: valuesPanelWeight,
      width: axisLineWeight,
      height: height,
      fillStyle: colorAxis,
    });
    this.rect({
      ctx,
      x: valuesPanelWeight,
      y: valuesPanelWeight,
      width: width,
      height: axisLineWeight,
      fillStyle: colorAxis,
    });
    this.rect({
      ctx,
      x: valuesPanelWeight,
      y: height - axisLineWeight + valuesPanelWeight,
      width: width,
      height: axisLineWeight,
      fillStyle: colorAxis,
    });

    for (let i = 0; i <= countVerticalStep; i++) {
      const step = Math.trunc(i * realStep - gridLineWeight / 2);
      if (width - step > axisLineWeight && step > 0) {
        const x = step + valuesPanelWeight;
        this.rect({
          ctx,
          x: x,
          y: valuesPanelWeight,
          width: 1,
          height: height,
          fillStyle: colorGrid,
        });
        const textValue = (i * valueInY).toString();
        this.text({
          ctx,
          x: x - realTextWidth * textValue.length,
          y: (valuesPanelWeight - (valuesPanelWeight - realTextHeight * 2)) * 2,
          text: textValue,
          fontSize: fontSizeReal,
          fillStyle: colorAxis,
        });
      }
    }

    for (let i = 0; i <= countHorizontalStep; i++) {
      const step = Math.trunc(i * realStep - gridLineWeight / 2);
      if (height - step > axisLineWeight && step > 0) {
        const y = height - step + valuesPanelWeight;
        this.rect({
          ctx,
          x: valuesPanelWeight,
          y: y,
          width: width,
          height: gridLineWeight,
          fillStyle: colorGrid,
        });
        this.text({
          ctx,
          x: 0,
          y: y + realTextHeight,
          text: i * valueInX,
          fontSize: fontSizeReal,
          fillStyle: colorAxis,
        });
      }
    }
  }

  render() {
    const { className, width, height, valuesPanelWeight, actions } = this.props;

    const realWidth = width + valuesPanelWeight;
    const realHeight = height + valuesPanelWeight;

    return (
      <div className={classNames(['graph', className])}>
        <canvas
          ref={element => (this.canvas = element)}
          width={realWidth}
          height={realHeight}
        />
        {actions && <div className="graph_actions">{actions}</div>}
      </div>
    );
  }
}

export default Graph;
