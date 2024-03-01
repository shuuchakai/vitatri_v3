import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    height: {
        type: Number,
        required: true,
        min: 0,
    },
    weight: {
        type: Number,
        required: true,
        min: 0
    },
    mainGoal: {
        type: String,
        enum: ["Incrementar masa muscular", "Incrementar peso", "Mantener peso", "Perder peso"],
    },
    specificGoals: [{
        type: Schema.Types.ObjectId,
        ref: "SpecificGoal"
    }],
    dietPlans: [{
        type: Schema.Types.ObjectId,
        ref: "DietPlan"
    }],
    workoutPlans: [{
        type: Schema.Types.ObjectId,
        ref: "WorkoutPlan"
    }],
    waterTracking: [{
        type: Schema.Types.ObjectId,
        ref: "WaterTracking"
    }],
}, { timestamps: true });

const User = model('User', userSchema);

export default User;