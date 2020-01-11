import React from 'react';
import logo from './vitae.svg';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import JobList from './components/JobList';
import JobDetails from './components/JobDetails';

function App() {
  return (
    <Router>
      <div className="bg-light">

        <nav className="navbar bg-primary navbar-dark sticky-top">
          <a className="navbar-brand" href="/">

            <img
              src={logo}
              alt="vitae logo"
              height="60"
              width="100" />
          </a>
        </nav>

        <main className="container ">
          <Switch>
            <Route path="/jobdetails/:jobId" component={JobDetails} />
            <Route path="/joblist" component={JobList} />
            <Redirect from="/" to="/joblist" />
            <Redirect from="*" to="/joblist" />
          </Switch>
        </main>



      </div>
    </Router>
  );
}



export default App;
