const API = {
  async getLastWorkout() {
    try {
      const res = await fetch("/api/workouts");
      const json = await res.json()
      return json[json.length - 1];
    } catch (err) {
      console.log(err);
      return;
    }
  },
  async addExercise(data) {
    try {
      const id = location.search.split("=")[1];
      console.log("id" + id);
      console.log("data"+JSON.stringify(data));
      const res = await fetch("/api/workouts/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log(await res.json());
      return await res.json();
    } catch (err) {
      console.log(err);
      return;
    }
  },
  async createWorkout(data = {}) {
    try {
      const res = await fetch("/api/workouts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      return await res.json();
    } catch (err) {
      console.log(err);
      return;
    }
  },

  async getWorkoutsInRange() {
    try {
      const res = await fetch("/api/workouts/range");
      return await res.json();
    } catch (err) {
      console.log(err);
    }
  },
};
