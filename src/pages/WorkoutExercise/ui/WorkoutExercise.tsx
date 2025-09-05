import type { Workout } from "@/shared/api/model";
import { ImageWithLQIP } from "@/shared/ui/ImageWithLQIP";
import { PageWithHeader } from "@/shared/ui/PageWithHeader";
import { PageWithPadding } from "@/shared/ui/PageWithPadding";
import {
  Box,
  Button,
  Flex,
  Progress,
  Span,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import ButtonSoundController from "./ButtonSoundController";
import { DoneButton } from "./DoneButton";
import { MediaWithTabs } from "./MediaWithTabs";

export type Props = {
  countExercises: number;
  currentExercise: number;
  onSkip: () => void;
  onPrev: () => void;
  onFinish: () => void;
  onCancel: () => void;
  onDone: () => void;
} & Workout["sets"][number]["exercises"][number];

export default function WorkoutExercise(props: Props) {
  const {
    exercise: { image, name, video },
    currentExercise,
    countExercises,
    onCancel,
    onFinish,
    onSkip,
    onPrev,
  } = props;

  const isFirstExercive = currentExercise === 0;
  const isLastExercive = currentExercise === countExercises - 1;

  return (
    <PageWithPadding>
      <PageWithHeader
        leftElement={
          <Button size="xs" onClick={onCancel} variant="ghost">
            <AiOutlineClose />
          </Button>
        }
        centerElement={
          <Box flex={1}>
            <Progress.Root
              value={currentExercise}
              max={countExercises}
              size="lg"
              variant="outline"
              animated={true}
            >
              <Progress.Track borderRadius="xl" background="gray.100">
                <Progress.Range background="blue" />
              </Progress.Track>
            </Progress.Root>
          </Box>
        }
        rightElement={<ButtonSoundController />}
      >
        <MediaWithTabs image={image} video={video} />
        <Flex
          direction="column"
          justifyContent="space-between"
          flex={1}
          alignItems="center"
          gap={4}
        >
          <Box>
            <Text
              fontSize="xl"
              _firstLetter={{ textTransform: "uppercase" }}
              lineClamp={1}
            >
              {name}
            </Text>
          </Box>
          <DoneButton {...props} key={currentExercise} />
          <Flex gap={4} width="100%">
            <Button
              flex={1}
              background="blue.200"
              size="xl"
              rounded="full"
              onClick={isFirstExercive ? onCancel : onPrev}
            >
              <Span textTransform="capitalize" color="blue">
                {isFirstExercive ? "cancel" : "prev"}
              </Span>
            </Button>
            <Button
              flex={1}
              background="blue"
              size="xl"
              rounded="full"
              onClick={isLastExercive ? onFinish : onSkip}
            >
              <Span textTransform="capitalize">
                {isLastExercive ? "finish" : "skip"}
              </Span>
            </Button>
          </Flex>
        </Flex>
      </PageWithHeader>
    </PageWithPadding>
  );
}
