const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        lowercase:true,
        trim:true
    },
    Description:{
        type:String,
        required:true,
        lowercase:true,
        trim:true
    },
    Author:{
        type:String,
        required:true, 
        trim:true
    },
    Ingredients:{
        type:Array,
        required:true,
    },
    Method:{
        type:Array,
        require:true,
    }
});

const Recipe = mongoose.model("Recipe",recipeSchema);

module.exports = Recipe;