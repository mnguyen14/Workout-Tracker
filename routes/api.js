const router = require("express").Router();
const e = require("express");
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
      dbWorkout.forEach(workout => {
        var total = 0;
        workout.exercises.forEach(e => {
          total += e.duration;
        });
        workout.totalDuration = total;
      });
      res.status(200).json(dbWorkout);
    }).catch(err => {
      res.status(500).json(err);
    });
}); 

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
        { _id: req.params.id },
        {
            $inc: { totalDuration: req.body.duration },
            $push: { exercises: req.body }
        },
        { new: true }
    ).then(dbWorkout => {
        res.status(200).json(dbWorkout);
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.post("/api/workouts", (req, res) => {
    db.Workout.create(body)
    .then(dbWorkout => {
        res.status(200).json(dbWorkout);
    }).catch(err => {
        res.status(500).json(err)
    });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.status(200).json(dbWorkout);
    }).catch(err => {
        res.status(500).json(err);
    });
});


module.exports = router;