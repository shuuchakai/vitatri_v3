import { Schema, model } from 'mongoose';

const dietPlanSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    recipes: [
        {
            recipeName: {
                type: String,
                required: true
            },
            ingredients: [
                {
                    ingredientName: {
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
                    carbs: {
                        type: Number,
                        required: true
                    }
                }
            ],
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
                carbs: {
                    type: Number,
                    required: true
                }
            }
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

const DietPlan = model('DietPlan', dietPlanSchema);

export default DietPlan;