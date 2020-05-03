const forceJsonResponse = (req, res, next) => {
  res.type('application/json');
  next();
};

module.exports = forceJsonResponse;