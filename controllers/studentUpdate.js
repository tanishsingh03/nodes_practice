const db=require('../config/db');

const studentUpdate = (req,res)=>{
    const {id}=req.body;
    const {name, email, age, course} = req.body;
    const sql = "UPDATE students SET name=?, email=?, age=?, course=? WHERE id=?";
    db.query(sql, [name, email, age, course, id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                message: "Database Error",
                error: err.message
            });
        }

        res.status(200).json({
            message: "Student updated successfully"
        });
    });
}
module.exports={studentUpdate};