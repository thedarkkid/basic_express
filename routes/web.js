const Controllers = require("../controller");
const express = require("express");
const router = express.Router();

router.get('/', Controllers.pages.index);

module.exports = router;