const db = require("../db");
const Student = require("../models/student");

const addStudent = async (req,res,next)=>{
    const data = req.body;
    db.collection('students').doc("afcuh9O2PUWil8MwpbaJ").get()
    .then(result=>{
        res.send(result.data());
    })
    .catch(error=>{
        res.status(400).send(error.message);
    })
}

module.exports = {
    addStudent
}