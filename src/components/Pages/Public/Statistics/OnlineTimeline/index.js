import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

import Graph from '../../../../../containers/Pages/Public/Statistics/OnlineTimeline/Graph';

import SvgZoomIn from '../../../../SvgImage/ZoomIn';
import SvgZoomOut from '../../../../SvgImage/ZoomOut';

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
      const newScale = scale * 1.25;
      return { scale: newScale <= 2.5 ? newScale : scale };
    });
  };

  handleClickZoomOut = () => {
    this.setState(({ scale }) => {
      const newScale = scale / 1.25;
      return { scale: newScale >= 0.5 ? newScale : scale };
    });
  };

  render() {
    const { className, onlineMap } = this.props;
    const { scale } = this.state;

    return (
      <div className={classNames(['statistics-online', className])}>
        <div className="statistics-online_timeline">
          <Graph
            onlineMap={onlineMap}
            scale={scale}
            actions={
              <div className="statistics-online_timeline_action">
                <button
                  className="statistics-online_timeline_action_button"
                  onClick={this.handleClickZoomIn}
                >
                  <SvgZoomIn className="statistics-online_timeline_action_button_icon" />
                </button>
                <button
                  className="statistics-online_timeline_action_button"
                  onClick={this.handleClickZoomOut}
                >
                  <SvgZoomOut className="statistics-online_timeline_action_button_icon" />
                </button>
              </div>
            }
          />
        </div>
      </div>
    );
  }
}

export default OnlineTimeline;
