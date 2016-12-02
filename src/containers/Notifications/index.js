import React from 'react';
import { connect } from 'react-redux';
import { NotificationStack } from 'react-notification';
import { dismiss } from '../../actions/notifications';

class Notifications extends React.Component {
  render() {
    return (
      <NotificationStack
        notifications={this.props.notifications.toArray()}
        dismissAfter={2500}
        onDismiss={notification => this.props.dispatch(dismiss(notification))}
      />
    );
  }
}

Notifications.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  notifications: React.PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    notifications: state.notifications
  };
}

export default connect(mapStateToProps)(Notifications);
