import React, { Component, PropTypes } from 'react';

import ResponseListItem from './response-list-item';

class ResponseList extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {responses} = this.props;
    return (
      <section>
        {responses.map((response, index) => {
          return <ResponseListItem response={response} key={index} />
        })}
      </section>
    );
  }
}

ResponseList.propTypes = {
  responses: PropTypes.array.isRequired,
};

export default ResponseList;