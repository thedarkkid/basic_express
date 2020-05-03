const moment = require("moment");

//create middleware
const logger = (req, res, next) => {
    console.log(`whattup biyatch you hit ${req.protocol}://${req.get('host')}${req.originalUrl} at ${moment().format()}`);
    next();
};

module.exports = logger;