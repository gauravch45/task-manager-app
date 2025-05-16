    const mongoose = require('mongoose');

    const UserSchema = new mongoose.Schema({
        name: { 
            type: String,
            required: true
        },
        email: { 
            type: String,
            required: true,
            unique: true
        },
        password: { 
            type: String,
            required: true
        }
    }, { collection: 'users' }); // Explicitly set collection name

    module.exports = mongoose.model('User', UserSchema, 'users'); // Explicitly set collection name