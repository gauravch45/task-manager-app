import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "./TaskForm";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    // Fetch tasks from backend
    const fetchTasks = () => {
        axios.get("http://localhost:5000/api/tasks")
            .then(response => setTasks(response.data))
            .catch(error => console.error("Error fetching tasks:", error));
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    // Delete tasks on backend
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/tasks/${id}`);
            fetchTasks();
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };
    
    // Update tasks on backend
    const handleUpdate = async (id) => {
        const newTitle = prompt("Enter new task title:");
        if (!newTitle) return;
    
        try {
            await axios.put(`http://localhost:5000/api/tasks/${id}`, { title: newTitle });
            fetchTasks();
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    
    return (
        <div className="container">
            <div className="text-div">
                    <h2 className="text-center mt-4">Task List</h2>
                        <TaskForm onTaskAdded={fetchTasks} />
           </div>
            <div className="card-div mt-4">
                {tasks.map(task => (
                    <div key={task._id} className=" task-card">
                        <div className="card shadow">
                            <h2 className="card-title">{task.title}</h2>
                            <h4 className="card-description">{task.description}</h4>
                            <div className="card-clicks">
                            <ul> 
                                    <li>
                                        <button onClick={() => handleUpdate(task._id)}>Edit</button>
                                        <button onClick={() => handleDelete(task._id)}>Delete</button>
                                    </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    
    

    /*return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task._id}>{task.title}</li>
                ))}
            </ul>
            <ul>
                {tasks.map(task => (
                    <li key={task._id}>
                        {task.title}
                            <button onClick={() => handleUpdate(task._id)}>Edit</button>
                            <button onClick={() => handleDelete(task._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );*/
};

export default TaskList;
