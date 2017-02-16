import React, { Component } from 'react';
import { connect } from 'react-redux';

import MessageBox from './message-box';
import MessageList from './message-list';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    }
  }

  postMessage = (message) => {
    const {messages} = this.state;
    messages.push(message);
    this.setState({ messages });
  }

  render() {
    const {userName} = this.props,
      {messages} = this.state;

    return (
      <section>
        <div className="row">Hello, {userName}</div>
        <div className="row margin-top-15">
          <MessageBox onPost={this.postMessage} />
        </div>
        <div className="row margin-top-15">
          <MessageList messages={messages}/>         
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userName: state.reducers.userName
  };
};
export default connect(mapStateToProps, null)(Main);