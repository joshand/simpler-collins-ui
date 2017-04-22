import React from 'react';


var SideBar = React.createClass({

  getInitialState: function() {
    return {
      // initialize with a blank list
      data: []
    }
  },

  render: function() {
    return (
        <div className="sidebar" data-color="blue" data-image="assets/img/sidebar.jpg">
          <div className="sidebar-wrapper">
            <div className="logo">
              <a href="https://github.com/imapex/collins" className="simple-text">
              Collins
              </a>
            </div>
            <ul className="nav">
              <li className="active">
                <a href="/#"><i className="pe-7s-graph"></i><p>Dashboard</p></a>
              </li>
              <li className="inactive">
                <a href="/results"><i className="pe-7s-graph"></i><p>Results</p></a>
              </li>
              <li className="inactive">
                <a href="/another.html"><i className="pe-7s-graph"></i><p>Another HTML</p></a>
              </li>
            </ul>
          </div>
        </div>

    )
  }
});

export default SideBar
