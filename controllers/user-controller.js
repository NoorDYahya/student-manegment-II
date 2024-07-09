var Student = require('../models/user-models');


const postStudent = async (req,res) => {

    var mydb = req.body;
    if(!mydb.name ||!mydb.age || !mydb.mail || !mydb.avg  ){
        res.json({data:'All the data is required',code:404});
    }
    else{
        var newStudent = new Student({
            name :mydb.name,
            age: mydb.age,
            mail: mydb.mail,
            avg :mydb.avg,
        });
        var response = await newStudent.save();
        console.log(response);
        if(response){
            res.json({data:'Data is Saved Succesfully',code:200});
        }else{
            res.json({data:'Data is Not Saved ',code:404});
        }

    }


}


const getStudents = async(req,res)=>{
   var response = await Student.find();
   res.json(response);

}

exports.postStudent = postStudent;
exports.getStudents =getStudents;