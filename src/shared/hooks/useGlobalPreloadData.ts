import { useMatches } from "react-router";
import type { Settings, User, Workout } from "../api/model";

export const useGlobalPreloadData = () => {
  const data = useMatches();
  // TODO: сделать нормальный тип
  return data.reduce((acc, curr) => Object.assign(acc, curr.data), {}) as {
    exercises: Workout[];
    settings: Settings;
    user: User;
  };
};
