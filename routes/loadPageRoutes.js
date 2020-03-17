const router = require('express').Router();

// Amazon
router.route('/gp/*').get((req, res) => {
  res.redirect('http://www.amazon.com' + req.url);
});

// Testing
// Test site: https://github.com/Lunastryke/a-pager
router.route('https://a-pager.herokuapp.com/Lunastryke/*').get((req, res) => {
  res.redirect('http://www.github.com' + req.url);
});

module.exports = router;
