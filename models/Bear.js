const mongoose = require("mongoose")
const BearSchema = mongoose.Schema({
Bear_name:{
    type:String,
    required:true
}, 
Bear_size: {
    type:Number,
    min:1,max:222
}, 
Bear_type: {
    type:String,
    required:true
}
})
module.exports = mongoose.model("Bear",BearSchema)