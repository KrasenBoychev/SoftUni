const mongoose = require('mongoose');
require('../models/User');
require('../models/Recipe');

async function configDatabase() {
    const connectionsString = 'mongodb://localhost:27017/home-recipes';

    await mongoose.connect(connectionsString);

    console.log('Database connected');
}

module.exports = { configDatabase };