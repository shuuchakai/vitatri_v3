import { Schema, model } from 'mongoose';

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: [{
        type: Schema.Types.ObjectId,
        ref: "Ingredient"
    }],
    totalNutritionalValues: {
        calories: {
            type: Number,
            required: true
        },
        proteins: {
            type: Number,
            required: true
        },
        fats: {
            type: Number,
            required: true
        },
        carbohydrates: {
            type: Number,
            required: true
        }
    }
}, { timestamps: true });

const Recipe = model('Recipe', recipeSchema);

export default Recipe;