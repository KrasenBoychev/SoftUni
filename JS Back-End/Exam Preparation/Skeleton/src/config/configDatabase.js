const mongoose = require('mongoose');
// TODO import models

async function configDatabase() {
    //TODO set database name
    const connectionsString = 'mongodb://localhost:27017/exam-db';

    await mongoose.connect(connectionsString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log('Database connected');
}

module.exports = { configDatabase };