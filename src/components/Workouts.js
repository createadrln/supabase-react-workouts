import AddWorkout from "./Workouts/AddWorkout";
import WorkoutsList from "./Workouts/WorkoutsList";

export default function Workouts({ session }) {
  return (
    <div>
      <AddWorkout session={session} />
      <WorkoutsList />
    </div>
  );
}
