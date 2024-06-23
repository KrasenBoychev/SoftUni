const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const { isUser } = require('../middlewares/guards');
const { parseError } = require('../util');
const { getById, create, update, deleteById, recommend } = require('../services/recipes');

const recipeRouter = Router();

//Create
recipeRouter.get('/create', isUser(), async (req, res) => {
  res.render('create');
});

recipeRouter.post(
    '/create',
    isUser(),
    body('title')
      .trim()
      .isLength({ min: 2 })
      .withMessage('Title must be at least 2 characters long'),
    body('description')
      .trim()
      .isLength({ min: 10, max: 100 })
      .withMessage('Description must be between 10 and 100 characters'),
    body('ingredients')
      .trim()
      .isLength({ min: 10, max: 200 })
      .withMessage('Ingredients  must be between 10 and 200 characters'),
    body('instructions')
      .trim()
      .isLength({ min: 10 })
      .withMessage('Instuctions must be at least 10 characters long'),
      body('image')
      .trim()
      .isURL({ require_tld: false })
      .withMessage('Image should start with http:// or https://'),
    async (req, res) => {
      try {
        const validation = validationResult(req);
  
        if (validation.errors.length) {
          throw validation.errors;
        }
  
        const result = await create(req.body, req.user._id);
  
        res.redirect('/catalog');
      } catch (err) {
        res.render('create', { data: req.body, errors: parseError(err).errors });
      }
    }
  );

  //Edit
recipeRouter.get('/edit/:id', isUser(), async (req, res) => {
    const recipe = await getById(req.params.id);
  
    if (!recipe) {
      res.render('404');
      return;
    }
  
    const isOwner = req.user._id == recipe.owner.toString();
  
    if (!isOwner) {
      res.redirect('/login');
      return;
    }
  
    res.render('edit', { data: recipe });
  });
  
  recipeRouter.post(
    '/edit/:id',
    isUser(),
    body('title')
    .trim()
    .isLength({ min: 2 })
    .withMessage('Title must be at least 2 characters long'),
  body('description')
    .trim()
    .isLength({ min: 10, max: 100 })
    .withMessage('Description must be between 10 and 100 characters'),
  body('ingredients')
    .trim()
    .isLength({ min: 10, max: 200 })
    .withMessage('Ingredients  must be between 10 and 200 characters'),
  body('instructions')
    .trim()
    .isLength({ min: 10 })
    .withMessage('Instuctions must be at least 10 characters long'),
    body('image')
    .trim()
    .isURL({ require_tld: false })
    .withMessage('Image should start with http:// or https://'),
    async (req, res) => {
     const recipeId = req.params.id;
     const userId = req.user._id;
  
      try {
        const validation = validationResult(req);
  
        if (validation.errors.length) {
          throw validation.errors;
        }
  
        const result = await update(recipeId, req.body, userId);
  
        res.redirect('/details/' + recipeId);
      } catch (err) {
        res.render('edit', { data: req.body, errors: parseError(err).errors });
      }
    }
  );

  //Recommend
recipeRouter.get('/recommend/:id', isUser(), async (req, res) => {
    const recipeId = req.params.id;
    const userId = req.user._id;
  
     try {
       const result = await recommend(recipeId, userId);
  
       res.redirect('/details/' + recipeId);
      } catch (err) {
       res.redirect('/');
     }
   });
  
  //Delete
   recipeRouter.get('/delete/:id', isUser(), async (req, res) => {
      const recipeId = req.params.id;
      const userId = req.user._id;
   
       try {
         const result = await deleteById(recipeId, userId);
   
         res.redirect('/');
       } catch (err) {
         res.redirect('/details/' + recipeId);
       }
     });

module.exports = { recipeRouter };