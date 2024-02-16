import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pcc1 from './Pcc1.js';
import Pcc2 from './Pcc2.js';
import Pcc3 from './Pcc3.js';
import Pcc4 from './Pcc4.js';
import Graphs from './Graphs.js';
import { Park } from './Park.js';
import Energy from './Energy.js';

 const Navigat = () => {
  return (
    <Router>   
      <Switch>
        {/* <Route path="/" exact component={Login}/> */}
        {/* <Route path="/Home" exact component={Body} /> */}
        <Route path="/Pcc1" exact component={Park} />
        <Route path="/Pcc2" exact component={Park} />
        <Route path="/Pcc3" exact component={Park} />
        <Route path="/Pcc4" exact component={Park} />
        <Route path="/Pcc1/Park Light D.B's"  exact component={Park}/>
       
        <Route path="/LiveGraphs" exact component={Graphs}/>
        <Route path="/" exact component={Energy}/>
        {/* <Route path="/Services" exact component={Service}/> */}
      </Switch>
    </Router>
  )
}
export default Navigat;
