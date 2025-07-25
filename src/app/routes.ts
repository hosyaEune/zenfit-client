import { PATHS } from "../constants";
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("../pages/home/ui/Home.tsx"),
  route(PATHS.workout, "../proccesses/Workout/ui/Workout.tsx"),
  route(
    PATHS.collectionInformation,
    "../proccesses/InitCollectionInformation/ui/InitCollectionInformation.tsx"
  ),
  route(PATHS.history, "../pages/History/ui/History.tsx"),
  route(PATHS.settings, "../pages/Settings/ui/Settings.tsx"),
  route(PATHS.report, "../pages/Report/ui/Report.tsx"),
] satisfies RouteConfig;
