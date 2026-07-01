const express = require('express');
const router = express.Router();

const {getStudent} = require('../controllers/studentController');
router.get('/', getStudent);

const {studentPost}=require('../controllers/studentPost');
router.post('/post',studentPost);

module.exports = router;