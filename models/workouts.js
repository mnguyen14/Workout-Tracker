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
            trim: true,
        },
        weight: {
            type: Number,
            trim: true,
        },
        reps: {
            type: Number,
            trim: true,
        },
        sets: {
            type: Number,
            trim: true,
        },
        distance: {
            type: Number,
            trim: true,
        }
    }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;