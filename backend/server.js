const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const taskRoutes = require('./routes/taskRoutes');
app.use('/api', taskRoutes);

//Connect to Mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
} ).then(() => console.log("Mongo Connected"))
    .catch(err => console.log("MongoDB connection Error:",err));

//Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));