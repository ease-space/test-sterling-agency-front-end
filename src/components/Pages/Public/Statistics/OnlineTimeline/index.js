import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

import Graph from '../../../../../containers/Pages/Public/Statistics/OnlineTimeline/Graph';

class OnlineTimeline extends Component {
  static propTypes = {
    className: PropTypes.string,
    onlineMap: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      scale: 1,
    };
  }

  handleClickZoomIn = () => {
    this.setState(({ scale }) => {
      return { scale: scale * 1.25 };
    });
  };

  handleClickZoomOut = () => {
    this.setState(({ scale }) => {
      return { scale: scale / 1.25 };
    });
  };

  render() {
    const { className, onlineMap } = this.props;
    const { scale } = this.state;

    return (
      <div className={classNames(['online', className])}>
        <div className="online_timeline">
          <Graph onlineMap={onlineMap} scale={scale} />
          <button onClick={this.handleClickZoomIn}>Збільшити</button>
          <button onClick={this.handleClickZoomOut}>Зменшити</button>
        </div>
      </div>
    );
  }
}

export default OnlineTimeline;
