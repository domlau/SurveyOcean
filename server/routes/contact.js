let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>{
  res.render('content/contact', { title: 'Survey Ocean' });
});

module.exports = router;
