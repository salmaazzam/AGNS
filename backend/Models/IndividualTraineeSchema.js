const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IndividualTraineeSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  counrty: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const IndividualTraniee = mongoose.model('IndividualTraniee', IndividualTraineeSchema);
module.exports = IndividualTraniee;