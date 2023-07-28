const withAuth = (req, res, next) => {
    if (!req.session.signed_in) {
      res.redirect('/signin');
    } else {
      next();
    }
  };
  
  module.exports = withAuth; 