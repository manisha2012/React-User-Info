import React, { Component } from 'react';
import classes from './Users.css';
import UserList from './UserList';
import UserInfo from './UserInfo';
import {Route, Link} from 'react-router-dom';

import bgImg from '../assets/img/bgi.jpg';

class App extends Component {
  render() {
    return (
      <div className={classes.Background} style={{backgroundImage: 'url('+bgImg+')'}}>
        <div className="container">
	       <div className="row">
		       <div className="col-sm-6 col-sm-offset-3">
             <div className={classes.Container}>
               <div className={classes.Box} >
                 <div className={classes.BoxHeader}>
		               <h3 className={classes.BoxTitle}><Link to="/">USERS</Link></h3>
									 <h5>THE LIST OF USERS</h5>
		             </div>
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

export default App;
