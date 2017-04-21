import React from 'react';
import axios from 'axios';


var ResultsTable = React.createClass({

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
        .get("http://127.0.0.1:8000/api/v1/results")
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
        <h2>Results List</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Job ID</th>
                <th>Result</th>
                <th>HTML</th>
              </tr>
            </thead>
            <tbody>

              {this.state.data.map(function(result) {
                // iterate over results and print
                return (

                    <tr>
                      <td>{result.id}</td>
                      <td>{result.jobId}</td>
                      <td>{result.result}</td>
                      <td><div dangerouslySetInnerHTML={{__html: result.pluginHTMLResponse}}></div></td>
                    </tr>

                )
              })}
            </tbody>
          </table>
        </div>
    )
  }
});

export default ResultsTable
