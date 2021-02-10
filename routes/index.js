var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.log.info('default route --> rendering index page')
  res.render('index', { title: 'Express' });
});

module.exports = router;
