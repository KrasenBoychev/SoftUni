const express = require('express');
const { configDatabase } = require('./config/configDatabase');
const { configHbs } = require('./config/configHbs');
const { configExpress } = require('./config/configExpress');
const { configRoutes } = require('./config/configRoutes');

const api = require('./services/volcano');
const { createToken, verifyToken } = require('./services/jwt');
const { register, login } = require('./services/user');

start();

async function start() {
    const app = express();

    await configDatabase();
    configHbs(app);
    configExpress(app);
    configRoutes(app);

    app.listen(3000, () => {
        console.log('Server strated http://localhost:3000');
        test();
    });
}

async function test() {
    try {

    // const dataId = '6672b1327de7ceadc7e06427';
    // const userId = '6672a3eb04eef0f9880ec6b7';

     // Read Record
    //  const result = await api.getById(dataId);

    //Create Record

    //     const result = await api.create({
    //         name: 'Mount Etna',
    //         location: 'Sicily Italy',
    //         elevation: 250,
    //         lastEruption: 2018,
    //         image: 'http://localhost:3000/static/images/etna.jpg',
    //         typeVolcano: 'Stratovolcanoes',
    //         description: 'yoooooooooooooooooooooooooooooooo'
    // }, '6672a3eb04eef0f9880ec6b5');

    // Edit Record

    // const dataId = '6672af54cabf6676d493ac32';
    // const formData = {
    //     name: 'Hunga Tonga',
    //     location: 'Tonga Islands',
    //     elevation: 114,
    //     lastEruption: 2024,
    //     image: 'http://localhost:3000/static/image/hunga-tonga.jpg',
    //     typeVolcano: 'Submarine',
    //     description: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ',
    // };
    // const userId = '6672a3eb04eef0f9880ec63e';
    // const result = await api.update(dataId, formData, userId);

    // Delete Record
    // const dataId = '6672af54cabf6676d493ac32';
    // const userId = '6672a3eb04eef0f9880ec6b5';
    // await api.deleteById(dataId, userId);


    // Add Vote
    // const result = await api.addVote(dataId, userId);

    // console.log(result); 

    } catch(err) {
        console.log('Caught error');
        console.log(err.message);
    }
}