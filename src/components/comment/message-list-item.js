import React, { PropTypes } from 'react';
import MessageBox from './message-box';

const reply = (message) => { };
const MessageListItem = ({message}) => {
  return (
    <section className="post-item">
      <div className="post-item-description">
        {message}
      </div>
      <section className="comment-section">
        <span>Comments</span>
        <MessageBox onPost={reply} />
      </section>
    </section>
  );
};

MessageListItem.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MessageListItem;