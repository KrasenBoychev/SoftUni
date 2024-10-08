const express = require('express');
const cookieParser = require('cookie-parser');
const { session } = require('../middlewares/session');

const secret = 'cookie secr3t';

function configExpress(app) {
  app.use(cookieParser(secret));
  app.use(session());

  app.use('/styles', express.static('styles'));
  app.use(express.urlencoded({ extended: true }));
}

module.exports = { configExpress };