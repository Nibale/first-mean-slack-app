var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var cookingSchema = new Schema({
    name: String,
    image: String,
    time: Number,
    ingredients: [],
    directions: []
    
})
var cooking = mongoose.model("cookingCollection", cookingSchema);
module.exports = cooking;
