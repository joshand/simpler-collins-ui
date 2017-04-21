import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './App';
import JobsList from './components/JobsList';
import JobsTable from './components/JobsTable';
import './index.css';

ReactDOM.render(
  <Banner />,
  document.getElementById('root')
);

ReactDOM.render(
  <JobsList />,
  document.getElementById('jobs-list')
)

ReactDOM.render(
  <JobsTable />,
  document.getElementById('jobs-table')
)
