import { PROGRAM, SETTINGS, USER } from "./mock";
import type { Settings, Workout, User as UserType } from "./model";

const getExercises = async (): Promise<Workout[]> => PROGRAM;

const getSettings = async (): Promise<Settings> => SETTINGS;

const getUser = async (): Promise<UserType> => USER as UserType;

export const server = {
  getExercises,
  getSettings,
  getUser,
};
