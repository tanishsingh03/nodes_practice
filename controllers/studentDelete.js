const db=require('../config/db');

const studentDelete=(req,res)=>{
    const {id}=req.params;
    const sql="DELETE FROM students WHERE id=?";
    db.query(sql,[id],(err,result)=>{
        if(err){
            return res.status(500).json({error:err.message});
        }
        return res.status(200).json({message:"Student deleted successfully"});
    });


}
module.exports={studentDelete};