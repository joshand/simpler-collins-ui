import React from 'react';
import axios from 'axios';


var JobsTable = React.createClass({

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
        <h2>Jobs List</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>

              {this.state.data.map(function(job) {
                // iterate over jobs and print
                return (

                    <tr>
                      <td>{job.id}</td>
                      <td>{job.name}</td>
                      <td>{job.description}</td>
                    </tr>

                )
              })}
            </tbody>
          </table>
        </div>
    )
  }
});

export default JobsTable
