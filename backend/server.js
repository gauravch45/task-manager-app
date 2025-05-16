const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

//Routes
app.get('/', (req, res) => {
    res.send("API is running...");
});

// taskRoutes 
let taskRoutes;
try {
    taskRoutes = require('./routes/taskRoutes');
    app.use('/api', taskRoutes);
} catch (error) {
    console.error("Error loading taskRoutes module:", error.message);
}

// usersRoutes
let usersRoutes;
try {
    usersRoutes = require('./routes/usersRoutes');
    app.use('/api', usersRoutes);
} catch (error) {
    console.error("Error loading usersRoutes module:", error.message);
}

//Connect to Mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
} ).then(() => console.log("Mongo Connected"))
    .catch(err => console.log("MongoDB connection Error:",err));

//Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));