const { Router } = require('express');
const { getAll, create, getById } = require('../services/furniture');
const { isUser } = require('../middlewares/guards');
const { body, validationResult } = require('express-validator');
const { parseError } = require('../util');

const catalogRouter = Router();

catalogRouter.get('/', async (req, res) => {
  const data = await getAll();

  res.json(data);
});

catalogRouter.post(
  '/',
  isUser(),
  body('make')
    .trim()
    .isLength({ min: 4 })
    .withMessage('Make must be at least 4 characters long'),
  body('model')
    .trim()
    .isLength({ min: 4 })
    .withMessage('Model must be at least 4 characters long'),
  body('year')
    .trim()
    .isInt({ min: 1950, max: 2050 })
    .withMessage('Year must be between 1950 and 2050'),
  body('description')
    .trim()
    .isLength({ min: 10 })
    .withMessage('Description must be at least 10 characters long'),
  body('price')
    .trim()
    .isFloat({ min: 0.01 })
    .withMessage('Price must be positive number'),
  body('img')
    .trim()
    .isURL({ require_tld: false, require_protocol: true })
    .withMessage('Please enter valid Image Url'),
  body('material').trim(),
  async (req, res) => {
    try {
        const validation = validationResult(req);
    
        if (validation.errors.length) {
          throw validation.errors;
        }

        const result = await create(req.body, req.user._id);
       
        res.json(result);
      } catch (err) {
          const parsed = parseError(err);
          res.status(400).json({ code: 400, message: parsed.message });
      }
  }
);

catalogRouter.get('/:id', async (req, res) => {
    const record = await getById(req.params.id);

    if (!record) {
        res.status(404).json({ code: 404, message: 'Item not found' });
        return;
    }
  res.json(record);
});

module.exports = {
  catalogRouter,
};
