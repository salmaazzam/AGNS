const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GuestSchema = new Schema({
  counrty: {
    type: String,
    required: true,
  },

}, { timestamps: true });

const Guest = mongoose.model('Guest', GuestSchema);
module.exports = Guest;