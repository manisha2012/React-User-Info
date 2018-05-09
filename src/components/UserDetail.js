import React from 'react';

const UserDetail = (props) => {
  return (
    <div>
      <div>{props.user.first_name}</div>
    </div>
  );
};

export default UserDetail;
