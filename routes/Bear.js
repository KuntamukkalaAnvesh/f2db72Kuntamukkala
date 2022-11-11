var express = require('express');
const Bear_controlers= require('../controllers/Bear');
var router = express.Router();
/* GET costumes */
router.get('/', Bear_controlers.Bear_view_all_Page );
module.exports = router;