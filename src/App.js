import React from 'react';
import Header from './components/Header';


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

        <Header />

        <main className="container py-5">
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
