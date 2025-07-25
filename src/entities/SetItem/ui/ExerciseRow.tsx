import type { Workout } from "@/shared/api/model";
import { TimeHelper } from "@/shared/helpers/Time";
import { ImageWithLQIP } from "@/shared/ui/ImageWithLQIP";
import { Box, Flex, Span } from "@chakra-ui/react";
import type { FC } from "react";

type Props = Workout["sets"][number]["exercises"][number];

export const ExerciseRow: FC<Props> = ({ exercise, type, count }) => (
  <Flex height={112} gap={4} alignItems="center">
    <Box height="100%" aspectRatio="1/1">
      <ImageWithLQIP borderRadius="lg" {...exercise.image} />
    </Box>

    <Flex direction="column" justifyContent="space-around" height="80%">
      <Span
        _firstLetter={{ textTransform: "uppercase" }}
        lineClamp={1}
        font-size="xl"
        fontWeight="bold"
      >
        {exercise.name}
      </Span>
      {type === "reps" ? (
        <Span>X{count}</Span>
      ) : (
        <Span>{TimeHelper.formatDuration(count)}</Span>
      )}
    </Flex>
  </Flex>
);
