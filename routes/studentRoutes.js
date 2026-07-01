const express = require('express');
const router = express.Router();

const {getStudent,getStudentbyId} = require('../controllers/studentController');
router.get('/', getStudent);
router.get('/:id', getStudentbyId);

const {studentPost}=require('../controllers/studentPost');
router.post('/post',studentPost);

module.exports = router;