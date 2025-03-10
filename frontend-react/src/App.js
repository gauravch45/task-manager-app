import TaskList from './components/TaskList';
//import TaskForm from './components/TaskForm';
import './App.css';


function App() {
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
