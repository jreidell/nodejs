const express = require('express');
const Controller = require('../controllers/blogController');

//express app
const router = express.Router();

router.get('/', Controller.blog_read_all);
router.get('/create', Controller.blog_create_get);
router.get('/update/:id', Controller.blog_update_get);
router.post('/put/:id', Controller.blog_update_post);
router.post('/', Controller.blog_create_post);
router.get('/:id', Controller.blog_read_one);
router.delete('/:id', Controller.blog_delete);

module.exports = router;