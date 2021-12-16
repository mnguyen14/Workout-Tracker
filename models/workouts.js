const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercise: [{
        type: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            trim: true,
            required: "Enter the workout you did"
        },
        duration: {
            type: Number,
        },
        weight: {
            type: Number,
            default: 0,
        },
        reps: {
            type: Number,
            default: 0,
        },
        sets: {
            type: Number,
            default: 0,
        },
        distance: {
            type: Number,
            default: 0,
        }
    }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;