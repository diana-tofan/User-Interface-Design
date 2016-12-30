import React from 'react';
import {render} from 'react-dom';
import App from './App';
import Grades from './Grades';
import Schedule from './Schedule';
import Tasks from './Tasks';
import Exams from './Exams';
import Attendance from './Attendance';
import Login from './Login';
import { Router, Route, Link, browserHistory } from 'react-router';

render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/grades" component={Grades} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/tasks" component={Tasks} />
        <Route path="/exams" component={Exams} />
        <Route path="/attendance" component={Attendance} />
      </Route>
      <Route path="/login" component={Login} />
    </Router>
  ), document.getElementById('root')
);