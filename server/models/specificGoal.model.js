import { Schema, model } from 'mongoose';

const specificGoalSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    targetValue: {
        type: Number,
        required: true,
    },
    unitOfMeasure: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

const SpecificGoal = model('SpecificGoal', specificGoalSchema);

export default SpecificGoal;