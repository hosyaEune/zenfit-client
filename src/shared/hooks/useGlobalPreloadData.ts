import { useMatches } from "react-router";
import type { Settings, User, Workout } from "../api/model";

export const useGlobalPreloadData = () => {
  const data = useMatches();

  // TODO: сделать нормальный тип
  const result = data.reduce(
    (acc, curr) => Object.assign(acc, curr.data),
    {}
  ) as {
    exercises: Workout[];
    settings: Settings;
    user: User;
  };

  const exercisesMapById = result.exercises.reduce(
    (acc, curr) => {
      acc[curr.id] = curr;

      return acc;
    },
    {} as Record<string, Workout>
  );

  return {
    ...result,
    exercisesMapById,
  };
};
