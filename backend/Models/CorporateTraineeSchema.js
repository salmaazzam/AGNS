const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CorporateTraineeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  counry:{
    type:String,
    required:false
  }

}, { timestamps: true });

const CorporateTrainee = mongoose.model('CorporateTrainee', CorporateTraineeSchema);
module.exports = CorporateTrainee;
