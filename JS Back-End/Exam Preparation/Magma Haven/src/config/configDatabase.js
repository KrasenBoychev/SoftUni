const mongoose = require('mongoose');
require('../models/User');
require('../models/Volcano');

async function configDatabase() {
    const connectionsString = 'mongodb://localhost:27017/magma-haven';

    await mongoose.connect(connectionsString);

    console.log('Database connected');
}

module.exports = { configDatabase };