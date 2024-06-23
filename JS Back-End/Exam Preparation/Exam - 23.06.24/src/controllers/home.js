const { Router } = require('express');
const { getRecent, getAll, getById } = require('../services/recipes');

const homeRouter = Router();

homeRouter.get('/', async (req, res) => {
    const recipes = await getRecent();

    res.render('home', { recipes });
});

homeRouter.get('/catalog', async (req, res) => {
    const recipes = await getAll();

    res.render('catalog', { recipes });
});

homeRouter.get('/details/:id', async (req, res) => {
    const recipe = await getById(req.params.id);
    
    if(!recipe) {
      res.render('404');
      return;
    }
  
    const isOwner = req.user?._id == recipe.owner.toString();
    const hasRecommended = Boolean(recipe.recommendList.find(r => req.user?._id == r.toString()));
  
    res.render('details', { recipe, isOwner, hasRecommended });
  });
module.exports = {
    homeRouter
};