const mongoose = require('mongoose');

async function configDatabase() {
    const connectionsString = 'mongodb://localhost:27017/second-hand-electronics';

    await mongoose.connect(connectionsString);

    console.log('Database connected');
}

module.exports = { configDatabase };