const Controllers = require("../controllers/loader");
const express = require("express");
const router = express.Router();

router.get('/', Controllers.pages.index);

module.exports = router;