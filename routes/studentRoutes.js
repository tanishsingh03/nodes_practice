const express = require('express');
const router = express.Router();

const {getStudent,getStudentbyId} = require('../controllers/studentController');
router.get('/', getStudent);
router.get('/:id', getStudentbyId);

const {studentPost}=require('../controllers/studentPost');
router.post('/post',studentPost);

const {studentUpdate}=require('../controllers/studentUpdate');
router.put('/update/:id', studentUpdate);

module.exports = router;