var express = require('express');
const Bear_controlers= require('../controllers/Bear');
var router = express.Router();
/* GET costumes */
router.get('/', Bear_controlers.Bear_view_all_Page );
router.get('/bear/:id', Bear_controlers.Bear_detail); 
module.exports = router;
// GET request for one Bear.
router.get('/Bear/:id', Bear_controlers.Bear_detail);
/* GET detail Bear page */
router.get('/detail', Bear_controlers.Bear_view_one_Page);
/* GET create Bear page */
router.get('/create', Bear_controlers.Bear_create_Page);
/* GET create update page */
router.get('/update', Bear_controlers.Bear_update_Page);
/* GET delete Bear page */
router.get('/delete', Bear_controlers.Bear_delete_Page);