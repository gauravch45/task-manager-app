import React, { useState } from "react";
import axios from "axios";

const TaskForm = ({ onTaskAdded }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title) return;

        try {
            await axios.post("http://localhost:5000/api/tasks", { title , description });
            setTitle("");
            setDescription("");
            onTaskAdded();  // Refresh task list after adding
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a task"
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter a task description"
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
