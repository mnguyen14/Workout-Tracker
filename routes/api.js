const router = require("express").Router();
const Workout = require("../models/workouts");
const path = require("path");

router.get("/", (req,  res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(data => {
        res.json(data);
        })
        .catch (err => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id, {
            $push: {
                exercise: req.body
            }
        }, {
            new: true,
            runValidators: true
        }
    )
    .then(data => {
        res.json(data);
        })
        .catch (err => {
            res.status(400).json(err);
        });
})

router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(data => {
    res.json(data);
    })
    .catch (err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: "$exercise.duration"
            }
        }
    }])
    .then(data => {
        res.json(data);
        })
        .catch (err => {
            res.status(400).json(err);
        });
});


module.exports = router;