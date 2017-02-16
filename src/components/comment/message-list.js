import React, { PropTypes } from 'react';

import MessageListItem from './message-list-item';

const MessageList = ({messages}) => {
  return (
    <section className="post-item">
      {messages.map((message, index) => {
        return <MessageListItem message={message} key={index} />
      })}
    </section>
  );
};

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default MessageList;