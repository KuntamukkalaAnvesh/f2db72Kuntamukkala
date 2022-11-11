const mongoose = require("mongoose")
const BearSchema = mongoose.Schema({
Bear_name: String,
Bear_size: Number,
Bear_type: String
})
module.exports = mongoose.model("Bear",BearSchema)