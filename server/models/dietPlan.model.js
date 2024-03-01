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
    recipes: [{
        type: Schema.Types.ObjectId,
        ref: "Recipe"
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

const DietPlan = model('DietPlan', dietPlanSchema);

export default DietPlan;