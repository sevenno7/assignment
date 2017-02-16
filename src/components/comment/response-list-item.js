import React, { Component, PropTypes } from 'react';

import MessageBox from './message-box';

class ResponseListItem extends Component {
  constructor(props) {
    super(props);

  }

   reply = (message) => {
    // todo.
  };

  render() {
    const {response} = this.props;
    return (
      <div>
        {response.userName} - {response.message}
        <MessageBox onPost={this.reply} buttonLabel="Reply" />
      </div>
    );
  }
}

ResponseListItem.propTypes = {

};

export default ResponseListItem;