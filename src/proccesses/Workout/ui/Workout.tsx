import { WorkoutCogratulations } from "@/pages/WorkoutCogratulations";
import { WorkoutExercise } from "@/pages/WorkoutExercise";
import { WorkoutPreview } from "@/pages/WorkoutPreview";
import type { Workout } from "@/shared/api/model";
import { useGlobalPreloadData } from "@/shared/hooks/useGlobalPreloadData";
import { Text } from "@chakra-ui/react";
import { memo, useRef, useState, type FC } from "react";
import { useParams } from "react-router";

const useGetWorkoutById = (id: string | number) => {
  const { exercises, settings } = useGlobalPreloadData();
  const data = exercises.find((item) => item.id === Number(id));

  const allExercise = (data?.sets ?? []).reduce(
    (acc, set) => {
      const exercises = Array(set.repeatCount)
        .fill(null)
        .flatMap(() => {
          const setExercises = [...set.exercises];

          if (set.restSeconds > 0) {
            setExercises.push({
              type: "time",
              count: set.restSeconds,
              exercise: {
                id: settings.restId,
                name: "Отдых",
                image: {
                  src: "/Rest.png",
                },
                met: 1.7,
              },
            } as Workout["sets"][number]["exercises"][number]);
          }

          return setExercises;
        });

      acc.push(...exercises);

      return acc;
    },
    [] as Workout["sets"][number]["exercises"]
  );
  // удаляем последний отдых
  if (allExercise[allExercise.length - 1]?.exercise?.id === settings.restId) {
    allExercise.pop();
  }

  const restCount = allExercise.reduce((acc, curr) => {
    if (curr.exercise.id === settings.restId) {
      acc++;
    }

    return acc;
  }, 0);

  return {
    workout: data,
    isLoading: false,
    allExercise,
    restCount,
  };
};

const exerciseCalories = (MET: number, weight: number, minutes: number) =>
  0.0175 * MET * weight * minutes;

const Workout: FC = memo(() => {
  const [page, setPage] = useState<"preview" | "exercise" | "cogratulations">(
    "preview"
  );
  const { user, settings } = useGlobalPreloadData();

  const [currentExerciseIndex, setCurrentExerciseIndex] = useState<number>(0);
  const params = useParams();
  const skipCount = useRef(0);
  const startDate = useRef(new Date());
  const endDate = useRef(new Date());
  const calRef = useRef<number>(0);
  const exerciseStartTime = useRef(new Date());
  const { id } = params;
  const { allExercise, restCount, workout } = useGetWorkoutById(id ?? "0");

  const currentExercise = allExercise[currentExerciseIndex];

  if (!workout) {
    return <Text>Loading...</Text>;
  }

  const recalc = () => {
    const deltaSecound =
      (Number(new Date()) - Number(exerciseStartTime.current)) / 1000;

    const MET = allExercise[currentExerciseIndex].exercise.met;
    const calories = exerciseCalories(MET, user.weight, deltaSecound / 60);

    calRef.current += calories;

    exerciseStartTime.current = new Date();
  };

  const onNextHandler = () => {
    recalc();
    setCurrentExerciseIndex((prev) => prev + 1);
  };

  const onPrevHandler = () => {
    if (allExercise[currentExerciseIndex].exercise.id !== settings.restId) {
      skipCount.current -= 1;
    }

    setCurrentExerciseIndex((prev) => prev - 1);
  };

  const onCancelHandler = () => {
    setPage("preview");
  };

  const onSkipHandler = () => {
    if (allExercise[currentExerciseIndex].exercise.id !== settings.restId) {
      skipCount.current += 1;
    }

    onNextHandler();
  };

  const onFinishHandler = () => {
    endDate.current = new Date();
    recalc();

    setPage("cogratulations");
  };
  switch (page) {
    case "exercise":
      return (
        <WorkoutExercise
          {...currentExercise}
          currentExercise={currentExerciseIndex}
          countExercises={allExercise.length}
          onSkip={onSkipHandler}
          onFinish={onFinishHandler}
          onCancel={onCancelHandler}
          onPrev={onPrevHandler}
          onDone={onNextHandler}
        />
      );
    case "preview":
      return (
        <WorkoutPreview
          {...workout}
          onClick={() => {
            startDate.current = new Date();

            setPage("exercise");
          }}
        />
      );
    case "cogratulations":
      return (
        <WorkoutCogratulations
          workout={workout}
          expendSeconds={
            (Number(endDate.current) - Number(startDate.current)) / 1000
          }
          countExercises={allExercise.length - restCount - skipCount.current}
          expendCalories={Number(calRef.current.toFixed(0))}
          endDate={endDate.current}
        />
      );
  }

  return null;
});

export default Workout;
