import { Schema, model } from 'mongoose';

const ingredientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
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
}, { timestamps: true });

const Ingredient = model('Ingredient', ingredientSchema);

export default Ingredient;