const { Router } = require('express');
const { getAll } = require('../services/electronics');


const catalogRouter = Router();

catalogRouter.get('/catalog', async (req, res) => {
    const electronics = await getAll();
    res.render('catalog', { electronics });
});

module.exports = { catalogRouter };