import React from 'react';
import styled from 'styled-components';
import { Page, Row, Column } from 'hedron';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { OrderedSet } from 'immutable';

import Header from '../components/Header';
import Notifications from './Notifications';
import { signInWithGitHub, signOut } from '../actions/auth';

const Content = styled(Column)`
  background: rgba(0, 0, 0, .05);
  border-radius: 5px;
`;

class Layout extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { auth, actions, loading, user } = this.props;
    return (
      <Page width='600px'>
        <Header signIn={actions.signIn} signOut={actions.signOut} auth={auth} loading={loading} user={user} />
        <Content>
          <Column fluid>
            {this.props.children}
          </Column>
        </Content>
        <Notifications />
      </Page>
    );
  }
}

Layout.propTypes =  {
  actions: React.PropTypes.object.isRequired,
  auth: React.PropTypes.object.isRequired,
  children: React.PropTypes.object,
  loading: React.PropTypes.bool.isRequired,
  user: React.PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    auth: state.auth,
    loading: state.ajaxCallsInProgress > 0,
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      signIn: signInWithGitHub,
      signOut,
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
