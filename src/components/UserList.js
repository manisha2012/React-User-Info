import React, { Component } from 'react';
import UserListDetail from './UserListDetail';
import {connect} from 'react-redux';

class UserList extends Component {
  renderUsers() {
    return this.props.users.map(user =>
      <UserListDetail key={user.id} user={user}/>
    );
  }
  
  render() {
    return (
      <div>
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(UserList);
