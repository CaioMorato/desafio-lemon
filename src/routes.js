// vitals
const routes = require('express').Router();
const { validateFields } = require('./middlewares/validations');
const { checkEligibility } = require('./controller/customerController');

routes.post('/customer', validateFields, checkEligibility);

module.exports = routes;
