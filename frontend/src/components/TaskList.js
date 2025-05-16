import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "./TaskForm";

const API_URL = process.env.REACT_APP_API_URL;

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    //console.log("API_URL", API_URL);

    // Fetch tasks from backend
    const fetchTasks = () => {
        axios.get(`${API_URL}/api/tasks`)
            .then(response => setTasks(response.data))
            .catch(error => console.error("Error fetching tasks:", error));
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    // Delete tasks on backend
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_URL}/api/tasks/${id}`);
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
            await axios.put(`${API_URL}/api/tasks/${id}`, { title: newTitle });
            fetchTasks();
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    // Change Status to of the tasks on backend
    const handleStatus = async (id) => {
        const newStatus = "completed";
        try {
            await axios.put(`${API_URL}/api/tasks/${id}`, {status: newStatus });
            fetchTasks();
        } catch (error) {
            console.error("Error changing status:", error);
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
                        <div className="card">
                            <h2 className="card-title">{task.title}</h2>
                            <h4 className="card-description">{task.description}</h4>
                            <div>{task.status}</div>
                            <div className="card-clicks">
                            <ul> 
                                    <li>
                                        <button onClick={() => handleUpdate(task._id)}>Edit</button>
                                        <button onClick={() => handleDelete(task._id)}>Delete</button>
                                        <button className="finish-btn" onClick={() => handleStatus(task._id)}>Finished</button>
                                    </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div> 
    );
};

export default TaskList;
