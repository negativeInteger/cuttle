// DEVELOPMENT ONLY
// This policy deletes the user's session data to simulate a timeout
module.exports = function (req, res, next) {
  delete req.session.usr;
  delete req.session.loggedIn;
  return next();
};
