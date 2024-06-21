const mongoose = require('mongoose');
//require('../models/User');
//require('../models/Data'); //TODO import real data model
// TODO import models

async function configDatabase() {
    const connectionsString = 'mongodb://localhost:27017/second-hand-electronics';

    await mongoose.connect(connectionsString);

    console.log('Database connected');
}

module.exports = { configDatabase };