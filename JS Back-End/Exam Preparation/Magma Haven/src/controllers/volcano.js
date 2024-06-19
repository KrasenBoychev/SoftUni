const { Router } = require('express'); 
const { body, validationResult } = require('express-validator');
const { parseError } = require('../util');

const { getById, create } = require('../services/volcano');
const { isUser } = require('../middlewares/guards');

const volcanoRouter = Router();

volcanoRouter.get('/create', isUser(), (req, res) => {
    res.render('create');
});

volcanoRouter.post('/create', isUser(),
body('name').trim().isLength({ min: 2 }), 
body('location').trim().isLength({ min: 3 }), 
body('elevation').trim().isInt({ min: 0 }), 
body('lastEruption').trim().isInt({ min: 0, max: 2024 }), 
body('image').trim().isURL({ require_tld: false, require_protocol: true }), 
body('typeVolcano').trim(), 
body('description').trim().isLength({ min: 10 }), 

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
});

module.exports = { volcanoRouter };