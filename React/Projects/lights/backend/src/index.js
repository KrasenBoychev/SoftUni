// Code  for mongoose config in backend
// Filename - backend/index.js

const { connectDatabase } = require('./config/configDatabase');
const { configExpress } = require('./config/configExpress');
const { configRoutes } = require('./config/configRoutes');
const express = require('express');

start();

async function start() {
    const app = express();

    await connectDatabase();
    configExpress(app);
    configRoutes(app);

    app.listen(5000);
}


// app.post('/', async (req, resp) => {
    //     try {
    //         const user = new User(req.body);
    //         let result = await user.save();
    //         result = result.toObject();
    //         if (result) {
    //             delete result.password;
    //             resp.send(req.body);
    //             console.log(result);
    //         } else {
    //             console.log('User already register');
    //         }
     
    //     } catch (e) {
    //         resp.send('Something Went Wrong');
    //     }
    // });
 

