import React from 'react';

const UserDetail = (props) => {
  return (
      <li className="redeem-wall-item">
          <hr></hr>
          <div className="media">
            <div className="media-left media-middle">
              <img className="media-object redeem-wall-img img-circle" src={props.user.user_image} alt="Kishore Kumar"/>
            </div>
            <div className="media-body redeem-wall-item-details">
              <div className="row">
                <div className="col-md-10">
                  <h4 className="media-heading">{props.user.first_name + " " + props.user.last_name}</h4>
                </div>
              </div>
            </div>
          </div>
        </li>
  );
};

export default UserDetail;
