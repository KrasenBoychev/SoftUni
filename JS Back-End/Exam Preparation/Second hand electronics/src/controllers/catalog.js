const { Router } = require('express');
const { getAll, getById, searchElectronics } = require('../services/electronics');


const catalogRouter = Router();

catalogRouter.get('/catalog', async (req, res) => {
    const electronics = await getAll();
    res.render('catalog', { electronics });
});

catalogRouter.get('/catalog/:id', async (req, res) => {
    const id = req.params.id;

    const electronics = await getById(id);

    if (!electronics) {
        res.status(404).render('404');
        return;
    }

    electronics.hasUser = res.locals.hasUser;
    electronics.isAuthor = req.user?._id == electronics.author.toString();
    electronics.hasVoted = Boolean(electronics.buyingList.find(v => v.toString() == req.user?._id));

    res.render('details', { electronics });
});

catalogRouter.get('/search', async (req, res) => {
    const { name, type } = req.query;

    const electronics = await searchElectronics(name, type);

    res.render('search', { data: { name, type }, electronics });
});


module.exports = { catalogRouter };