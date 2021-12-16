const router = require("express").Router();
const Workout = require('../models/workouts')

router.get("/workouts", async (req, res) => {
    try {
        const workoutData = await Workout.find({}).sort({ date: -1 });
        res.status(200).json(workoutData);
      } catch (err) {
        res.status(500).json(err);
      }
}); 

router.put("/workouts/:id", async (req, res) => {
    try {
    const workoutData = await  Workout.updateOne(
        {
            _id: params.id
        },
        {
            $push: {
                exercise: body
            }
        });
    
        res.status(200).json(workoutData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/workouts", async (req, res) => {
    try {
        const workoutData = await Workout.create(body);
        res.status(200).json(workoutData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/workouts/range", async (req, res) => {
    try {
        const workoutData = await Workout.find({}).sort({ date: -1 });
        res.status(200).json(workoutData);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;