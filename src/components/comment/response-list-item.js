import React, { Component, PropTypes } from 'react';

class ResponseListItem extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    const {response} = this.props;
    return (
      <div>
        {response.userName} - {response.message}
      </div>
    );
  }
}

ResponseListItem.propTypes = {

};

export default ResponseListItem;