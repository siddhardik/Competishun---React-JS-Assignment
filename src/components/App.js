import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Logout from './components/Authentication/Logout';
import TaskList from './components/TodoList/TaskList';
import AddTask from './components/TodoList/AddTask';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/logout" component={Logout} />
          <PrivateRoute path="/tasks" component={TaskList} />
          <PrivateRoute path="/add-task" component={AddTask} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) => (
        user ? <Component {...props} /> : <Redirect to="/" />
      )}
    />
  );
}

export default App;
