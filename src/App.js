import React, { Component } from 'react';
import classes from './App.css';
import UserList from './components/UserList';

import bgImg from './assets/img/bgi.jpg';

class App extends Component {
  render() {
    return (
      <div className={[classes.Background, ''].join(' ')} style={{backgroundImage: 'url('+bgImg+')'}}>
      <div className="container">
	       <div className="row">
		       <div className="col-sm-8 col-sm-offset-2">
             <div className={classes.Container}>
               <div className={classes.Box} >
                 <div className={classes.BoxHeader}>
		               <h3 className={classes.BoxTitle}>USERS</h3>
									 <h5>TFE LIST OF USERS</h5>
		             </div>
                 <UserList/>
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
