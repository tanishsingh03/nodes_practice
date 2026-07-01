const express=require('express');
const db=require('../config/db');

const getStudent=(req,res)=>{
    //res.send("Get Student");
    const sql="SELECT * FROM students";
    db.query(sql,(err,result)=>{
        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        res.status(200).json(result);
    });

}


module.exports={getStudent};
