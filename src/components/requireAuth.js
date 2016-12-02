import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { notify } from '../actions/notifications';

import { store } from '../index';

export default function (ComposedComponent){
  class Authentication extends Component {
    componentWillMount(){
      if(!this.props.authenticated) {
        this.context.router.push('/');
        store.dispatch(notify('You need to be logged to access this page'));
      }
    }
    componentWillUpdate(nextProps){
      if(!nextProps.authenticated) {
        this.context.router.push('/');
        store.dispatch(notify('You need to be logged to access this page'));
      }
    }
    render(){
      return <ComposedComponent {...this.props}/>;
    }
  }
  Authentication.contextTypes = {
      router : PropTypes.object
    };
  Authentication.propTypes  = {
    authenticated : PropTypes.bool,
  };
  const mapStateToProps = (state) => ({
    authenticated : state.auth.isLogged,
  });
  return connect(mapStateToProps)(Authentication);
}
