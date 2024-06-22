const mongoose = require('mongoose');
require('../models/User');
require('../models/Furniture');

async function configDatabase() {
    const connectionsString = 'mongodb://localhost:27017/furniture';

    await mongoose.connect(connectionsString);

    console.log('Database connected');
}

module.exports = { configDatabase };