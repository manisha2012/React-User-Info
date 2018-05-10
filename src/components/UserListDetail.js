import React from 'react';
import classes from './UserList.css';
import {Link} from 'react-router-dom';

const UserListDetail = (props) => {
  return (
    <li className="redeem-wall-item">
      <hr></hr>
      <div className="media">
        <div className="media-left media-middle">
          <img className={[classes.UserImg, 'media-object', 'img-circle'].join(' ')} src={props.user.user_image} alt="avatar"/>
        </div>
        <div className={[classes.UserDetails, 'media-body'].join(' ')}>
          <div className="row">
            <div className="col-md-7">
              <h4 className="media-heading">{props.user.first_name + " " + props.user.last_name}</h4>
              <p><small><span><i className="material-icons">location_on</i></span>{props.user.city + " , " + props.user.state}</small></p>
            </div>
            <div className="col-md-3">
              <Link to="/view-details" className="btn btn-danger btn-lg active" role="button">View Details</Link>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default UserListDetail;
