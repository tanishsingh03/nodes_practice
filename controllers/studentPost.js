const express = require('express');
const db=require('../config/db');
const studentPost =(req,res)=>{
    const {name, email,age,course} = req.body;
    const sql = "INSERT INTO students (name, email, age, course) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, email, age, course], (err, result) => {
        if (err) {
    console.error(err);

    return res.status(500).json({
        message: "Database Error",
        error: err.message
    });
}

        res.status(201).json({
            message: "Student added successfully",
            studentId: result.insertId
        });
    });
}
module.exports={studentPost};