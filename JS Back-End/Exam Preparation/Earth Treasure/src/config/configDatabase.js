const mongoose = require('mongoose');
require('../models/User');
require('../models/Stone');

async function configDatabase() {
    //TODO set database name
    const connectionsString = 'mongodb://localhost:27017/earth-treasure';

    await mongoose.connect(connectionsString);

    console.log('Database connected');
}

module.exports = { configDatabase };