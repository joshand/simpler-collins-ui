import React from 'react';
// import JobsTable from '../../components/JobsTable';
// import ResultsTable from '../../components/ResultsTable';
import SideBar from '../../components/Sidebar';
import NavBar from '../../components/Navbar';
import JobsTable from '../../components/JobsTable';
import ResultsTable from '../../components/ResultsTable';
import './assets/css/animate.css';
import './assets/css/bootstrap.css';
import './assets/css/light-bootstrap-dashboard.css';


// main page layout
function WholeScreen(props) {
  return (
      <div className="wrapper">
        <SideBar />
        <div className="main-panel">
          <NavBar />
          <MainPanel />
        </div>
      </div>

  );
}


function MainPanel(props) {
  return (
    <div className="container-fluid">
      <h1>This is the main panel</h1>
      <p>We can write straight HTML</p>

      <h3><strong>Note:</strong>We can expose an arbitrary number of child components here</h3>
      {props.children}

      <h4>Like a Job Table</h4>
      <JobsTable key='jobs'/>

      <h4>Or a Results Table</h4>
      <ResultsTable key='results'/>
    </div>



  );
}

export default WholeScreen
