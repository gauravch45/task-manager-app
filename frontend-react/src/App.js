import TaskList from './components/TaskList';
//import TaskForm from './components/TaskForm';
import './App.css';

import React, { useEffect } from 'react';



function App() {

  useEffect(() => {
    console.log(process.env.REACT_APP_API_URL);
  }, []);

  
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <div className='tasklistcont'>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
