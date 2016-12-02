import React from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class RepoList extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const { actions, user, loading, ...props } = this.props;
    return (
      <div { ...props }>{user.username}</div>
    );
  }
}

RepoList.propTypes = {
  actions: React.PropTypes.object.isRequired,
  loading: React.PropTypes.bool.isRequired,
  user: React.PropTypes.object.isRequired,
};


function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0,
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);
