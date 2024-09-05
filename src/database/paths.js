const express = require('express');
const cors = require("cors");
const db = require("./db");
const Recipe = require("./recipe");

const app = express();
const port = 3000;
//Middleware
app.use(cors({origin:'http://localhost:8080'}));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Gets the recipes
app.get('/api/recipes', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        console.error("Error fetching recipes:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.get('/api/recipes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findById(id);
        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }
        res.json(recipe);
    } catch (error) {
        console.error("Error fetching recipe:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.post('/api/recipes/add', async(req,res) => {
    try{
        console.log('Received data:', req.body); 
        const newRecipe = new Recipe(req.body);
        await newRecipe.save();
        console.log("added a recipe")
        res.status(201).json({message:"Recipe added!"})
    } catch(error) {
        res.status(500).json({message:"Failed adding the recipe"})
    }
})



app.put('/api/recipes/edit/:id', async (req, res) => {
    try {
        const { id } = req.params; 
        const updatedData = req.body;

        const updatedRecipe = await Recipe.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedRecipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }

        res.status(200).json({ message: "Recipe updated successfully", recipe: updatedRecipe });
    } catch (error) {
        console.error("Error updating recipe:", error);
        res.status(500).json({ message: "Failed to update the recipe", error: error.message });
    }
});


app.delete('/api/recipes/:id', async(req,res) => {
    try {
        const {id} = req.params;
        await Recipe.findByIdAndDelete(id);
        console.log("Recipe deleted successfully");
        res.status(200).json({ message: 'Recipe deleted successfully' });
    } catch(error) {
        console.error("error deleting recipe",error);
        res.status(500).json.apply({message:"Server error"});
    }
})

//Listen to the server
app.listen(port,() => {
    console.log("Server is listening port 3000")
})