const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const { isUser } = require('../middlewares/guards');
const { parseError } = require('../util');
const { getById, create, update, deleteById, likeStone } = require('../services/stone');
//TODO replace with real router according to exam description

const stoneRouter = Router();

//Create
stoneRouter.get('/create', isUser(), async (req, res) => {
  res.render('create');
});

stoneRouter.post(
  '/create',
  isUser(),
  body('name')
    .trim()
    .isLength({ min: 2 })
    .withMessage('name must be at least 2 characters long'),
  body('category')
    .trim()
    .isLength({ min: 3 })
    .withMessage('category must be at least 3 characters long'),
  body('color')
    .trim()
    .isLength({ min: 2 })
    .withMessage('color must be at least 2 characters long'),
  body('image')
    .trim()
    .isURL({ require_tld: false })
    .withMessage('image must be a valid URL'),
  body('location')
    .trim()
    .isLength({ min: 5, max: 15 })
    .withMessage('location must be between 5 and 15 characters long'),
  body('formula')
    .trim()
    .isLength({ min: 3, max: 30 })
    .withMessage('formula must be between 3 and 30 characters characters long'),
  body('description')
    .trim()
    .isLength({ min: 10 })
    .withMessage('description must be at least 10 characters long'),
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
stoneRouter.get('/edit/:id', isUser(), async (req, res) => {
  const stone = await getById(req.params.id);

  if (!stone) {
    res.render('404');
    return;
  }

  const isOwner = req.user._id == stone.author.toString();

  if (!isOwner) {
    res.redirect('/login');
    return;
  }

  res.render('edit', { data: stone });
});

stoneRouter.post(
  '/edit/:id',
  isUser(),
  body('name')
    .trim()
    .isLength({ min: 2 })
    .withMessage('name must be at least 2 characters long'),
  body('category')
    .trim()
    .isLength({ min: 3 })
    .withMessage('category must be at least 3 characters long'),
  body('color')
    .trim()
    .isLength({ min: 2 })
    .withMessage('color must be at least 2 characters long'),
  body('image')
    .trim()
    .isURL({ require_tld: false })
    .withMessage('image must be a valid URL'),
  body('location')
    .trim()
    .isLength({ min: 5, max: 15 })
    .withMessage('location must be between 5 and 15 characters long'),
  body('formula')
    .trim()
    .isLength({ min: 3, max: 30 })
    .withMessage('formula must be between 3 and 30 characters characters long'),
  body('description')
    .trim()
    .isLength({ min: 10 })
    .withMessage('description must be at least 10 characters long'),
  async (req, res) => {
   const stoneId = req.params.id;
   const userId = req.user._id;

    try {
      //TODO add validation
      const validation = validationResult(req);

      if (validation.errors.length) {
        throw validation.errors;
      }

      const result = await update(stoneId, req.body, userId);

      res.redirect('/catalog/' + stoneId);
    } catch (err) {
      res.render('edit', { data: req.body, errors: parseError(err).errors });
    }
  }
);

//Likes
stoneRouter.get('/like/:id', isUser(), async (req, res) => {
  const stoneId = req.params.id;
  const userId = req.user._id;

   try {
     const result = await likeStone(stoneId, userId);

     res.redirect('/catalog/' + stoneId);
    } catch (err) {
     res.redirect('/');
   }
 });

//Delete
 stoneRouter.get('/delete/:id', isUser(), async (req, res) => {
    const stoneId = req.params.id;
    const userId = req.user._id;
 
     try {
       const result = await deleteById(stoneId, userId);
 
       res.redirect('/');
     } catch (err) {
       res.redirect('/catalog/' + stoneId);
     }
   });

module.exports = { stoneRouter };
