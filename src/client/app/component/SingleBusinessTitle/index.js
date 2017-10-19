import React from 'react';
// import {withRouter} from 'react-router-dom';
import Rate from 'antd/lib/rate';
import 'antd/lib/rate/style/index.css';
import './style.scss';

class SingleBusinessTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let numberOfStar = this.props.singleBusinessDetail.rating || 0;
    let ratingScorePopUp = numberOfStar + ' rating';

    return (
      <div className="display-business-title">
        <div>
          <div className="single-business-name">
            <h1>{this.props.singleBusinessDetail.name}</h1>
          </div>
          <div title={ratingScorePopUp}>
            <Rate allowHalf character="★" disabled
              value={numberOfStar} />
          </div>
        </div>
        <div>
          <div className="single-business-links-container">
            <a className="single-business-links">Wrtie a Review</a>
            <a className="single-business-links">Add Photo</a>
            <a className="single-business-links">Share</a>
            <a className="single-business-links">Bookmark</a>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleBusinessTitle;
