import React from 'react';
import {withRouter} from 'react-router-dom';
import Spin from 'antd/lib/spin';
import 'antd/lib/spin/style/index.css';
import Rate from 'antd/lib/rate';
import 'antd/lib/rate/style/index.css';
import './style.scss';
// import SingleBusinessTitle from '../SingleBusinessTitle';

class CreatingNewCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'loading': false};
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    this.props.onEnterShiftSubmit(e);
  }

  render() {
    const {loading, onSubmit, changeRating, rating} = this.props;

    return (
      <div className="creating-new-comment-form">
        <Spin spinning={loading}>
          <h3 className="comment-title">Write a comment</h3>
          {/* <div className="business-container"> */}
          {/* <h1 >{this.props.businessDetail.name}</h1> */}
          {/* <div><h2>General Rating </h2> <Rate allowHalf character="★" disabled
              value={this.props.businessDetail.rating} /></div> */}
          {/* </div> */}
          <div className="business-info">
            <div className="business-info-name-rating">
              <h3 className="comment-business-name">{this.props.businessDetail.name}</h3>
              <p>Rating: {Number(this.props.businessDetail.rating).toFixed(2)}</p>
            </div>
          </div>
          <form className="comment-info"
            method="POST" name="comment-info-form"
            onSubmit={onSubmit} onKeyPress = {this.handleKeyPress}>
            <p className="comment-info-name">Your comment</p>
            <div className="comment-container">
              <div className="rating-container">
                <Rate allowHalf onChange={changeRating}
                  character="★" value={rating} />
                <span className="ant-rate-text">Select your rating</span>
              </div>
              <textarea rows="4" cols="50" name="comment-input"
                required placeholder="Add you comment" />
            </div>

            <input className="comment-submit"
              type="submit" value="Add Comment"/>
          </form>
        </Spin>
      </div>
    );
  }
}

export default withRouter(CreatingNewCommentForm);
