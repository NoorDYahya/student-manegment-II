var url = 'mongodb://localhost:27017/college';
var mongoose = require('mongoose');
mongoose.connect(url);


var studentSchema =mongoose.Schema({
  name:{
      type:String,
      required:true
  },
  age:{
    type:Number,
    required:true

  },
  mail:{
     type:String,
     required:true
  },
  avg:{
     type:Number,
     required:true
  }
});

var Student = mongoose.model("Student",studentSchema);
module.exports = Student;