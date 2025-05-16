// This file defines the routes for user-related operations.
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TaskList from './components/TaskList';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';
import PrivateRoute from './components/Privateroute';
import Home from './pages/Homepage';


function App() {

  return (
    <Router>
      <div className="App">
        <h1>Task Manager</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>} />
          <Route path="/tasks" element={
            <PrivateRoute>
              <div className='tasklistcont'>
              <TaskList />
              </div>
            </PrivateRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

//<TaskList /> </div>