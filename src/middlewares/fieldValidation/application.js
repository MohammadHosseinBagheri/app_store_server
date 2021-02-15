const { check } = require("express-validator");

function appValidation(req, res, next) {
  return [
    check("name")
      .isLength({ min: 4 })
      .isString()
      .withMessage("نام برنامه باید کاراکتر باشد"),
    check("categori")
      .isLength({ min: 4 })
      .isString()
      .withMessage("کتگوری باید کاراکتر باشد"),
    check("tag").isString(),
    check("size").isString().isLength({ min: 1 }),
    // check("images")
    check("rate").isString().isLength({ min: 1 }),
    check("companyName").isString().isLength({ min: 4 }),
    check("version").isString().isLength({ min: 1 }),
    check("installNumber").isLength({ min: 1 }).isString(),
    // comments
    check("description").isString().isLength({ min: 8, max: 200 }),
  ];
}

module.exports = appValidation;
