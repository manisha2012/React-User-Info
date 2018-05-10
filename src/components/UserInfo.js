import React, { Component } from 'react';
import {connect} from 'react-redux';
import classes from './UserList.css';

class UserInfo extends Component {
  render () {
    var selectedUserArr = this.props.users.filter((user) => {
      return user.id === this.props.selectedUser;
    });
    var selectedUserObj = selectedUserArr[0];
    return (
      <div className="row">
        <div className="col-sm-6 col-sm-offset-2">
          <h3 className={classes.UserName}>{selectedUserObj.first_name + " " + selectedUserObj.last_name}</h3>
          <p><i className={[classes.IconMargin, 'material-icons'].join(' ')}>cake</i>{selectedUserObj.dob}</p>
          <p><i className={[classes.IconMargin, 'material-icons'].join(' ')}>class</i><small>{selectedUserObj.job_title}</small></p>
          <p><i className={[classes.IconMargin, 'material-icons'].join(' ')}>work</i><small>{selectedUserObj.company}</small></p>
          <p><i className={[classes.IconMargin, 'material-icons'].join(' ')}>email</i>{selectedUserObj.email}</p>
          <p><i className={[classes.IconMargin, 'material-icons'].join(' ')}>call</i>{selectedUserObj.contact_no}</p>
          <p><i className={[classes.IconMargin, 'material-icons'].join(' ')}>location_on</i>{selectedUserObj.state+", "+selectedUserObj.country}</p>
        </div>
        <div className="col-sm-2">
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
