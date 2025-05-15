import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/tasks" component={TaskList} />
          <Route path="/add-task" component={TaskForm} />
          <Route path="/edit-task/:id" component={TaskForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;