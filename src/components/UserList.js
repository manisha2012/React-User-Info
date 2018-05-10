import React, { Component } from 'react';
import UserListDetail from './UserListDetail';

class UserList extends Component {
    state = {
      users : [
        {"id":1,"first_name":"Hamilton","last_name":"Molan","email":"hmolan0@sbwire.com","gender":"Male","dob":"12/12/2017","contact_no":"619-743-5683","city":"San Diego","state":"California","country":"United States","address":"91827 Blue Bill Park Hill","user_image":"https://robohash.org/ipsumquiseum.png?size=50x50&set=set1"},
        {"id":2,"first_name":"Odetta","last_name":"Stedall","email":"ostedall1@hatena.ne.jp","gender":"Female","dob":"6/27/2017","contact_no":"816-886-9006","city":"Kansas City","state":"Missouri","country":"United States","address":"814 Gale Trail","user_image":"https://robohash.org/etestsint.png?size=50x50&set=set1"},
        {"id":3,"first_name":"Uriah","last_name":"Saddington","email":"usaddington2@mediafire.com","gender":"Male","dob":"2/7/2018","contact_no":"203-342-8044","city":"Waterbury","state":"Connecticut","country":"United States","address":"88 Sullivan Parkway","user_image":"https://robohash.org/velfacerecupiditate.png?size=50x50&set=set1"},
        {"id":4,"first_name":"Ivonne","last_name":"Fletcher","email":"ifletcher3@mediafire.com","gender":"Female","dob":"4/20/2018","contact_no":"803-577-5032","city":"Columbia","state":"South Carolina","country":"United States","address":"64 Loeprich Court","user_image":"https://robohash.org/enimcumin.jpg?size=50x50&set=set1"},
        {"id":5,"first_name":"Kin","last_name":"Billson","email":"kbillson4@youtu.be","gender":"Male","dob":"5/20/2017","contact_no":"608-557-0899","city":"Madison","state":"Wisconsin","country":"United States","address":"13 Green Ridge Place","user_image":"https://robohash.org/autemprovidentdebitis.jpg?size=50x50&set=set1"}
      ]
    };

  renderUsers() {
    return this.state.users.map(user =>
      <UserListDetail key={user.id} user={user}/>
    );
  }

  render() {
    return (
      <div className="">
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    );
  }
}

export default UserList;
