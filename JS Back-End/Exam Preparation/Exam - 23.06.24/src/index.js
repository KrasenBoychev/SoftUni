const express = require('express');
const { configDatabase } = require('./config/configDatabase');
const { configHbs } = require('./config/configHbs');
const { configExpress } = require('./config/configExpress');
const { configRoutes } = require('./config/configRoutes');
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
        //test();
    });
}

async function test() {
    try {
        const result = await register('ivan@abv.bg', 'Bla Bla Bla Bla', '1234');
        console.log(result); 

    } catch(err) {
        console.log('Caught error');
        console.log(err.message);
    }
}