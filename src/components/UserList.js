import React, { Component } from 'react';
import UserDetail from './UserDetail';

class UserList extends Component {
    state = {
      users : [
        {"id":1,"first_name":"Darb","last_name":"Tomankowski","email":"dtomankowski0@yelp.com","gender":"Male","dob":"1/19/2018","contact_no":"513-583-3127","city":"Cincinnati","state":"Ohio","country":"United States","address":"64146 Marcy Trail"},
        {"id":2,"first_name":"Tallie","last_name":"Clemerson","email":"tclemerson1@pen.io","gender":"Male","dob":"10/25/2017","contact_no":"406-972-7173","city":"Billings","state":"Montana","country":"United States","address":"6 Veith Drive"},
        {"id":3,"first_name":"Kellyann","last_name":"Darnbrook","email":"kdarnbrook2@state.tx.us","gender":"Female","dob":"6/2/2017","contact_no":"317-980-4614","city":"Indianapolis","state":"Indiana","country":"United States","address":"26261 Magdeline Hill"},
        {"id":4,"first_name":"Ralf","last_name":"Florez","email":"rflorez3@list-manage.com","gender":"Male","dob":"3/23/2018","contact_no":"313-513-2619","city":"Detroit","state":"Michigan","country":"United States","address":"3161 Hudson Parkway"},
        {"id":5,"first_name":"Tommy","last_name":"Winger","email":"twinger4@free.fr","gender":"Male","dob":"6/20/2017","contact_no":"478-724-5502","city":"Macon","state":"Georgia","country":"United States","address":"587 Loeprich Point"}
      ]
    };

  renderUsers() {
    return this.state.users.map(user =>
      <UserDetail key={user.id} user={user}/>
    );
  }

  render() {
    return (
      <div>
        {this.renderUsers()}
      </div>
    );
  }
}

export default UserList;
