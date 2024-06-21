const { electronicsRouter } = require('../controllers/electronics');
const { homeRouter } = require('../controllers/home');
const { userRouter } = require('../controllers/user');

function configRoutes(app) {
  app.use(homeRouter);
  app.use(userRouter);
  app.use(electronicsRouter);
}

module.exports = { configRoutes };
