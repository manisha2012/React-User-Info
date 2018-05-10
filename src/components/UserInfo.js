import React, { Component } from 'react';
import {connect} from 'react-redux';
import classes from './UserList.css';

class UserInfo extends Component {
  render () {
    var selectedUserArr = this.props.users.filter((user) => {
      return user.id === this.props.selectedUser;
    });
    var selectedUserObj = selectedUserArr[0];
    console.log(selectedUserObj);
    return (
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <h3>{selectedUserObj.first_name + " " + selectedUserObj.last_name}</h3>
        </div>
        <div className="col-sm-6 col-offset-3">
          <img className={[classes.UserInfoImage, 'img-rounded'].join(' ')} src={selectedUserObj.user_image} alt="avatar"/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    selectedUser: state.selectedUser
  };
};

export default connect(mapStateToProps)(UserInfo);
