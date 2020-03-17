const router = require('express').Router();

// All routes other than '/' route will be directed to amazon
router.route('/gp/*').get((req, res) => {
  res.redirect('http://www.amazon.sg' + req.url);
});

router.route('/ap/*').get((req, res) => {
  res.redirect('http://www.amazon.sg' + req.url);
});

module.exports = router;
