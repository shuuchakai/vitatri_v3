import { Schema, model } from 'mongoose';

const workoutPlanSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    caloriesBurned: {
        type: Number,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    requiredEquipment: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

const WorkoutPlan = model('WorkoutPlan', workoutPlanSchema);

export default WorkoutPlan;