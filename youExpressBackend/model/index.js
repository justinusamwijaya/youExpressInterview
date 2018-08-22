const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transportationSchema = new Schema({
    SortOrder: Number,
    Name: String,
    MaxWeight: Number,
    Picture: String,
    Price: Number
},{ timestamps:true })

const Transportation = mongoose.model('Transportation',transportationSchema)

module.exports = Transportation