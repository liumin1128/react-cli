import React from 'react';
import { connect } from 'react-redux';

const Index = () => (<div>
  <h1>Index</h1>
</div>);

function mapStateToProps(state) {
  const { title } = state.common;
  console.log('title');
  console.log(title);
  return {
    title,
  };
}

export default connect(mapStateToProps)(Index);
