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
          <MainPanel>

                  <h4>here we instatiate children and send them parms</h4>
                  <MainPanel target='jobs'/>

                  <h4>but be careful for loops</h4>
                  <MainPanel target='results'/>

            <JobsTable />
          </MainPanel>
            />

        </div>
      </div>

  );
}


function MainPanel(props) {

  return (
    <div className="container-fluid">
      <h1>Main Panel</h1>
      <p>We can define HTML in the Parent Container</p>

      <p>and get props:</p>
      <p>{props.target}</p>
      <h4>We can add children here:</h4>
        <JobsTable key='jobs'/>

      <h3><strong>Note:</strong>We will also render all childobjects</h3>
        {props.children}

  </div>




  );
}

export default WholeScreen
