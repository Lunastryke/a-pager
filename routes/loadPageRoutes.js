const router = require('express').Router();

// Amazon
router.route('/gp/*').get((req, res) => {
  res.redirect('http://www.amazon.com' + req.url);
});

// Testing
// Test site: https://github.com/Lunastryke/a-pager
router.route('/Lunastryke/*').get((req, res) => {
  res.send('response ok');
  res.redirect('http://www.github.com' + req.url);
});

router.route('/api/get_reponse').get((req, res) => {
  res.send('response sent');
});

module.exports = router;
