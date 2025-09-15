import { PageWithPadding } from "@/shared/ui/PageWithPadding";
import { Button, Flex, Heading, Image, Span, Text } from "@chakra-ui/react";

import { Link } from "react-router";
import { PATHS } from "@/constants";
import { useEffect, useRef, type ComponentProps } from "react";
import axios from "axios";
import type { Workout } from "@/shared/api/model";
import { InformationBlock } from "@/features/InformationBlock";

type Props = {
  workout: Workout;
  endDate: Date;
} & ComponentProps<typeof InformationBlock>;

export default function WorkoutCogratulations({ workout, ...props }: Props) {
  // TODO: после перехода обновляется весь компонент Workout, как я понял, из-за react-router
  useEffect(() => {
    axios
      .post("/sw/__history/", {
        workoutId: workout.id,
        ...props,
        date: props.endDate,
      })
      .then(() => {
        console.log("zdec");
      });
  }, [workout.id, props]);

  return (
    <PageWithPadding alignItems="center" justifyContent="space-between">
      <Image src="/congratulations.png" alt="congratulations" height="55%" />
      <Flex direction="column" gap={8} alignItems="center">
        <Heading fontSize="xl" textTransform="capitalize">
          congratulations!
        </Heading>
        <Text fontSize="" textTransform="capitalize">
          you're completed the workout!
        </Text>
      </Flex>
      <InformationBlock {...props} />
      <Flex width="100%" gap={4}>
        <Button
          as={Link}
          // почему-то тип не работает
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          to={PATHS.home}
          flex={1}
          background="blue.200"
          size="xl"
          rounded="full"
        >
          <Span textTransform="capitalize" color="blue">
            go to homepage
          </Span>
        </Button>
        <Button
          as={Link}
          flex={1}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          to={PATHS.report}
          background="blue"
          size="xl"
          rounded="full"
        >
          <Span textTransform="capitalize" color="white">
            view report
          </Span>
        </Button>
      </Flex>
    </PageWithPadding>
  );
}
