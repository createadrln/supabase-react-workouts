import { useState, useEffect, Fragment } from "react";
import { supabase } from "../../supabaseClient";

export default function AddWorkout({ session }) {
  const [loading, setLoading] = useState(true);
  const [workoutname, setWorkoutname] = useState(null);

  useEffect(() => {
    getWorkout();
  }, [session]);

  async function getWorkout() {
    setLoading(false);
  }

  async function addWorkout({ workoutname }) {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      const updates = {
        id: user.id,
        workoutname,
        updated_at: new Date()
      };

      let { error } = await supabase.from("workouts").upsert(updates, {
        returning: "minimal" // Don't return the value after inserting
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Fragment>
      <div>
        <label htmlFor="workoutname">Workout Name</label>
        <input id="workoutname" type="text" value={workoutname || ""} onChange={(e) => setWorkoutname(e.target.value)} />
      </div>
      <div>
        <button className="button block primary" onClick={() => addWorkout({ workoutname })} disabled={loading}>
          {loading ? "Loading ..." : "Save"}
        </button>
      </div>
    </Fragment>
  );
}
