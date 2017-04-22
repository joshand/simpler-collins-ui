import React from 'react';
// import JobsTable from '../../components/JobsTable';
// import ResultsTable from '../../components/ResultsTable';
import SideBar from '../../components/Sidebar';
import NavBar from '../../components/Navbar';
import JobsTable from '../../components/JobsTable';
import './assets/css/animate.css';
import './assets/css/bootstrap.css';
import './assets/css/light-bootstrap-dashboard.css';

function WholeScreen(props) {
  return (
      <div className="wrapper">
        <SideBar />
        <div className="main-panel">
          <NavBar />
          <JobsTable />
        </div>
      </div>

  );
}

//
// function Dashboard() {
//   return (
//     <SplitPane left={<NavBar />} right={<SideBar />} />
//   );
// }

export default WholeScreen
// Export this for unit testing more easily
// export class Dashboard extends Component {
//
//   layout() {( function SplitPane(props) {
//     return (
//       <div className="SplitPane">
//         <div className="SplitPane-left">
//           {props.left}
//         </div>
//         <div className="SplitPane-right">
//           {props.right}
//         </div>
//       </div>
//     );
//   })
// }
//
//   render() {
//     return (
//       <div className="layout-wrapper">
//         <div className="container-fluid">
//           <Sidebar />
//         </div>
//         dsjlsdlkfj
//         <div className="container-fluid">
//           <Navbar />
//         </div>
//       </div>
//
//       )
//   }
// }
//
//
// export default Dashboard
