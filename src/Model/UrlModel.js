const mongoose = require("mongoose");


const urlSchema = new mongoose.Schema({
    longUrl: {
        type: String,
        require:true},
    shortUrl: {
        type: String,
        require:true,
        unique:true} ,
    urlCode: {
        type: String,
        require:true,
         unique:true,
         lowercase:true, 
         trim:true }
}, { timestamps: true })

module.exports = mongoose.model('Url', urlSchema)
