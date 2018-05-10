import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import classes from './Users.css';
import UserList from './UserList';
import UserInfo from './UserInfo';
import bgImg from '../assets/img/Img1.jpg';

class Users extends Component {
  render() {
    return (
      <div className={classes.Background} style={{backgroundImage: 'url('+bgImg+')'}}>
        <div className="container">
	       <div className="row">
		       <div className="col-sm-6 col-sm-offset-3">
             <div className={classes.Container}>
               <div className={classes.Box} >
                 <Route path="/" exact component={UserList} />
                 <Route path="/view-details" component={UserInfo} />
               </div>
             </div>
           </div>
         </div>
       </div>
    </div>
    );
  }
}

export default Users;
