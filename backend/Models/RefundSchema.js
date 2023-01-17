const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const RefundSchema = new Schema({
    refunds:{type:Array,
    items:{type:{refund:{
        courseID: {
          type: Number
        }
        ,
        UserId:{
          type:Number
        }
      }}}
}

}, { timestamps: true });

const Refund = mongoose.model('Refund', RefundSchema);
module.exports =Refund;
