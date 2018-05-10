import React, { Component } from 'react';
import {connect} from 'react-redux';

import classes from './UserList.css';
import {Link} from 'react-router-dom';

class UserListDetail extends Component  {
  userClicked (userId) {
    this.props.onClickingUser(userId);
  }
  render () {
    return (
      <li>
        <hr></hr>
        <div className="media">
          <div className="media-left media-middle">
            <img className={[classes.UserImg, 'media-object', 'img-circle'].join(' ')} src={this.props.user.user_image} alt="avatar"/>
          </div>
          <div className={[classes.UserDetails, 'media-body'].join(' ')}>
            <div className="row">
              <div className="col-md-7">
                <Link to="/view-details" onClick={() => {this.userClicked(this.props.user.id);}} className="active">
                  <h4 className="media-heading">{this.props.user.first_name + " " + this.props.user.last_name}</h4>
                </Link>
                <p className={classes.UserLocation}><small><span><i className="material-icons">location_on</i></span>{this.props.user.city + " , " + this.props.user.state}</small></p>
              </div>
              <div className="col-md-3">
                <Link to="/view-details" onClick={() => {this.userClicked(this.props.user.id);}} className="btn btn-info btn-md active" role="button">View Details</Link>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickingUser: (userId) => dispatch({type: 'SELECT_USER', userId: userId})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListDetail);
