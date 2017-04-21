import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './App';
import JobsList from './components/JobsList';
import JobsTable from './components/JobsTable';
import ResultsTable from './components/ResultsTable';

import './index.css';

ReactDOM.render(
  <Banner />,
  document.getElementById('root')
);

ReactDOM.render(
  <JobsTable />,
  document.getElementById('jobs-list')
)

ReactDOM.render(
  <ResultsTable />,
  document.getElementById('jobs-table')
)
