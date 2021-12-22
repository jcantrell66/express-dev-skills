var express = require('express');
var router = express.Router();

// import the todos controller
const skillsCtrl = require('../controllers/skills');


//This is where we will write all of our routes that the
// todos will need
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);







module.exports = router;