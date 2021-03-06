
const { ProjectProjectImageSchema } =require('./ProjectProjectImage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
Underscoreid:String , 


projectTitle:String , 


projectImage:  
ProjectProjectImageSchema
 , 


projectStart:Date , 


projectEnd:Date , 


projectDescription:String , 




 projectWorkpackages: [ 
  {
    type: Schema.Types.ObjectId,
    ref:'workpackage'
  }

]



})

module.exports = {
  Project : mongoose.model('project', projectSchema),
}

