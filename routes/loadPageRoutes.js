const router = require('express').Router();

// All routes other than '/' route will be directed to amazon
router.route('/*').get((req, res) => {
  res.redirect('http://www.amazon.com' + req.url);
});

module.exports = router;
