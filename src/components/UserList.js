import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import UserListDetail from './UserListDetail';
import classes from './UserList.css';
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
        <div className={classes.BoxHeader}>
          <h3 className={classes.BoxTitle}><Link to="/">HOME</Link></h3>
        </div>
        <ul className={classes.UserListStyle}>
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
