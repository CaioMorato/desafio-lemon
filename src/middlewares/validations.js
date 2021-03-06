const { StatusCodes } = require('http-status-codes');
const { customerSchemaValidation } = require('../schemas/customerSchema');

const validateFields = async (req, res, next) => {
  try {
    const validate = await customerSchemaValidation.validate(req.body);

    if (!validate || validate.error) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: validate.error.details[0].message });
    }

    next();
  } catch (err) {
    console.error(err);
  }
};

module.exports = { validateFields };
