var express = require('express');
var router = express.Router();

var studentController = require('../controllers/user-controller');

router.get('/enterdata',studentController.getStudents);
router.post('/enterdata',studentController.postStudent);


module.exports = router;