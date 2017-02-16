import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import MessageBox from './message-box';
import ResponseList from './response-list';

class MessageListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      responses: []
    };
  }

  reply = (message) => {
    const {responses} = this.state,
      {userName} = this.props;

    responses.push({ userName, message });
    this.setState({responses});
  };

  render() {
    const {message} = this.props,
      {responses} = this.state;

    return (
      <section className="post-item">
        <div className="post-item-description">
          {message}
        </div>
        <section className="comment-section">
          <span>Responses</span>
          <ResponseList responses={responses} />
          <MessageBox onPost={this.reply} buttonLabel="Response" />
        </section>
      </section>
    );
  }
}

MessageListItem.propTypes = {
  message: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    userName: state.reducers.userName
  };
};
export default connect(mapStateToProps, null)(MessageListItem);