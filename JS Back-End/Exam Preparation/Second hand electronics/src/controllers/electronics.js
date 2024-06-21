const { Router } = require('express');
const { isUser } = require('../middlewares/guards');
const { body, validationResult } = require('express-validator');
const { create } = require('../services/electronics');
const { parseError } = require('../util');

const electronicsRouter = Router();

electronicsRouter.get('/create', isUser(), (req, res) => {
  res.render('create');
});

electronicsRouter.post(
  '/create',
  isUser(),
  body('name')
    .trim()
    .isLength({ min: 10 })
    .withMessage('Name should be at least 10 characters'),
  body('type')
    .trim()
    .isLength({ min: 2 })
    .withMessage('Type should be at least 2 characters'),
  body('damages')
    .trim()
    .isLength({ min: 10 })
    .withMessage('Damages should be at least 10 characters'),
  body('image')
    .trim()
    .isURL({ require_tld: false, require_protocol: true })
    .withMessage('Image should start with http:// or https://'),
  body('description').trim().isLength({ min: 10, max: 200 }).withMessage('Description should be between 10 and 200'),
  body('production').trim().isInt({ min: 1900, max: 2023 }).withMessage('Production should be between 1900 and 2023'),
  body('exploitation').trim().isInt({ min: 0 }).withMessage('Exploitation should be a positive number'),
  body('price').trim().isInt({ min: 0 }).withMessage('Price should be a positive number'),
  async (req, res) => {
    const userId = req.user._id;
    try {
      const validation = validationResult(req);

      if (validation.errors.length) {
        throw validation.errors;
      }

      const result = await create(req.body, userId);

      res.redirect('/');
    } catch (err) {
      res.render('create', {
        data: req.body,
        errors: parseError(err).errors,
      });
    }
  }
);

module.exports = { electronicsRouter };