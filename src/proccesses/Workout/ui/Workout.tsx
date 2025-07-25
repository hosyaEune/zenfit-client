import { WorkoutCogratulations } from "@/pages/WorkoutCogratulations";
import { WorkoutExercise } from "@/pages/WorkoutExercise";
import { WorkoutPreview } from "@/pages/WorkoutPreview";
import type { Workout } from "@/shared/api/model";
import { TimeHelper } from "@/shared/helpers/Time";
import { useGlobalPreloadData } from "@/shared/hooks/useGlobalPreloadData";
import { Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
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

const previewIndex = -1;

const exerciseCalories = (MET: number, weight: number, minutes: number) =>
  0.0175 * MET * weight * minutes;

export default function Workout() {
  const { user, settings } = useGlobalPreloadData();

  const [currentExerciseIndex, setCurrentExerciseIndex] =
    useState<number>(previewIndex);
  const params = useParams();
  const skipCount = useRef(0);
  const startDate = useRef(new Date());
  const calRef = useRef<number>(0);
  const exerciseStartTime = useRef(new Date());
  const { id } = params;
  const { allExercise, restCount, workout } = useGetWorkoutById(id ?? "0");

  if (currentExerciseIndex > allExercise.length - 1) {
    return (
      <WorkoutCogratulations
        expendSeconds={TimeHelper.getMinutes(
          (Number(new Date()) - Number(startDate.current)) / 1000
        )}
        countExercises={allExercise.length - restCount - skipCount.current}
        expendCalories={Number(calRef.current.toFixed(0))}
      />
    );
  }

  const currentExercise = allExercise[currentExerciseIndex];

  if (!workout) {
    return <Text>Loading...</Text>;
  }

  if (!currentExercise) {
    return (
      <WorkoutPreview
        {...workout}
        onClick={() => {
          startDate.current = new Date();
          setCurrentExerciseIndex(0);
        }}
      />
    );
  }

  const onNextHandler = () => {
    const deltaSecound =
      (Number(new Date()) - Number(exerciseStartTime.current)) / 1000;

    const MET = allExercise[currentExerciseIndex].exercise.met;
    const calories = exerciseCalories(MET, user.weight, deltaSecound / 60);

    calRef.current += calories;

    exerciseStartTime.current = new Date();
    setCurrentExerciseIndex((prev) => prev + 1);
  };

  const onPrevHandler = () => {
    if (allExercise[currentExerciseIndex].exercise.id !== settings.restId) {
      skipCount.current -= 1;
    }

    setCurrentExerciseIndex((prev) => prev - 1);
  };

  const onCancelHandler = () => {
    setCurrentExerciseIndex(previewIndex);
  };

  const onSkipHandler = () => {
    if (allExercise[currentExerciseIndex].exercise.id !== settings.restId) {
      skipCount.current += 1;
    }

    onNextHandler();
  };

  return (
    <WorkoutExercise
      {...currentExercise}
      currentExercise={currentExerciseIndex}
      countExercises={allExercise.length}
      onSkip={onSkipHandler}
      onFinish={onNextHandler}
      onCancel={onCancelHandler}
      onPrev={onPrevHandler}
      onDone={onNextHandler}
    />
  );
}
