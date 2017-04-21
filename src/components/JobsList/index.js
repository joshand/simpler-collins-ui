import React from 'react';
import axios from 'axios';


var JobsList = React.createClass({

  getInitialState: function() {
    return {
      // initialize with a blank list
      data: []
    }
  },

  componentDidMount: function() {
    // call the API to load up data
    var _this = this;
    this.serverRequest =
      axios
        .get("http://127.0.0.1:8000/api/v1/jobs")
        .then(function(result) {
          _this.setState({
            data: result.data
          });
        })
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },


  render: function() {
    return (
      <div className="container-fluid">
        <h1>Jobs!</h1>
        <ul className="list-group">
        {this.state.data.map(function(job) {
          return (
            <div key={job.id}>
              <li className="list-group-item">Name: {job.name} ID: {job.id}</li>
            </div>
          )
        })}
        </ul>
      </div>
    )
  }
});

export default JobsList
