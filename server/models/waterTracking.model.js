import { Schema, model } from 'mongoose';

const waterTrackingSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    consumedAmount: {
        type: Number,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

const WaterTracking = model('WaterTracking', waterTrackingSchema);

export default WaterTracking;