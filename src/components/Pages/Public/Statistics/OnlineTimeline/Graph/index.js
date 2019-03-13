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
    valueInX: 5,
    valueInY: 100,
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

  drawLine = props => {
    const { ctx, strokeStyle, lineWidth, map } = props;
    ctx.beginPath();
    for (let i = 0; i < map.length; i++) {
      if (i === 0) {
        ctx.moveTo(map[i].x, map[i].y);
      } else {
        ctx.lineTo(map[i].x, map[i].y);
      }
    }
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeStyle;
    ctx.stroke();
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
      onlineMap,
    } = this.props;

    const realWidth = width + valuesPanelWeight;
    const realHeight = height + valuesPanelWeight;

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

    const maxEl = (countVerticalStep + 1) * valueInX;
    let onlineMapNormalized = [];
    if (onlineMap.length > maxEl) {
      for (let i = onlineMap.length - 1; i >= 0; i--) {
        if (i > onlineMap.length - 1 - maxEl) {
          onlineMapNormalized.push({ ...onlineMap[i] });
        }
      }
    } else {
      onlineMapNormalized = [...onlineMap].reverse();
    }

    const onlineMapAxis = onlineMapNormalized.map((point, index) => {
      const pxStepPointX = (realStep / valueInX) * index;
      const pxStepPointY = realStep / valueInY;
      return {
        ...point,
        x: realWidth - pxStepPointX,
        y: realHeight - point.countOnline * pxStepPointY,
      };
    });

    const ctxAxis = this.canvasAxis.getContext('2d');
    ctxAxis.clearRect(0, 0, realWidth, realHeight);
    const ctxLine = this.canvasLine.getContext('2d');
    ctxLine.clearRect(0, 0, realWidth, realHeight);

    this.rect({
      ctx: ctxAxis,
      x: valuesPanelWeight,
      y: valuesPanelWeight,
      width: axisLineWeight,
      height: height,
      fillStyle: colorAxis,
    });
    this.rect({
      ctx: ctxAxis,
      x: width - axisLineWeight + valuesPanelWeight,
      y: valuesPanelWeight,
      width: axisLineWeight,
      height: height,
      fillStyle: colorAxis,
    });
    this.rect({
      ctx: ctxAxis,
      x: valuesPanelWeight,
      y: valuesPanelWeight,
      width: width,
      height: axisLineWeight,
      fillStyle: colorAxis,
    });
    this.rect({
      ctx: ctxAxis,
      x: valuesPanelWeight,
      y: height - axisLineWeight + valuesPanelWeight,
      width: width,
      height: axisLineWeight,
      fillStyle: colorAxis,
    });

    for (let i = 0; i <= countVerticalStep; i++) {
      const step = Math.trunc(i * realStep - gridLineWeight / 2);
      if (width - step > realTextWidth * 2 && step > 0) {
        const x = width - step + valuesPanelWeight;
        this.rect({
          ctx: ctxAxis,
          x: x,
          y: valuesPanelWeight,
          width: 1,
          height: height,
          fillStyle: colorGrid,
        });
        const textValue = (i * -valueInX).toString();
        this.text({
          ctx: ctxAxis,
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
      if (height - step > realTextHeight && step > 0) {
        const y = height - step + valuesPanelWeight;
        this.rect({
          ctx: ctxAxis,
          x: valuesPanelWeight,
          y: y,
          width: width,
          height: gridLineWeight,
          fillStyle: colorGrid,
        });
        this.text({
          ctx: ctxAxis,
          x: 0,
          y: y + realTextHeight,
          text: i * valueInY,
          fontSize: fontSizeReal,
          fillStyle: colorAxis,
        });
      }

      this.drawLine({
        ctx: ctxLine,
        map: onlineMapAxis,
        lineWidth: 2,
        strokeStyle: colorAxis,
      });
      ctxLine.clearRect(0, 0, realWidth, valuesPanelWeight);
      ctxLine.clearRect(0, 0, valuesPanelWeight, realHeight);
    }
  }

  render() {
    const { className, width, height, valuesPanelWeight, actions } = this.props;

    const realWidth = width + valuesPanelWeight;
    const realHeight = height + valuesPanelWeight;

    return (
      <div className={classNames(['graph', className])}>
        <canvas
          ref={element => (this.canvasAxis = element)}
          width={realWidth}
          height={realHeight}
        />
        <canvas
          className="graph_canvans-line"
          ref={element => (this.canvasLine = element)}
          width={realWidth}
          height={realHeight}
        />
        {actions && <div className="graph_actions">{actions}</div>}
      </div>
    );
  }
}

export default Graph;
