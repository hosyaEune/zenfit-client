import { PageWithHeader } from "@/shared/ui/PageWithHeader";
import { PageWithNavigation } from "@/shared/ui/PageWithNavigation";
import { PageWithPadding } from "@/shared/ui/PageWithPadding";
import { Box, Center, Flex, Span, Spinner } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState, type FC, type FunctionComponent } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import { MonthlyCalendar } from "@/features/MonthlyCalendar";
import { useGlobalPreloadData } from "@/shared/hooks/useGlobalPreloadData";
import { ImageWithLQIP } from "@/shared/ui/ImageWithLQIP";
import { TimeHelper } from "@/shared/helpers/Time";
import { TbBarbellFilled } from "react-icons/tb";
import { AiOutlineClockCircle, AiOutlineFire } from "react-icons/ai";
import { SpinBlock } from "@/shared/ui/SpinBlock";

const List: FunctionComponent<{
  date: dayjs.Dayjs;
}> = ({ date }) => {
  const { exercisesMapById } = useGlobalPreloadData();

  const { data = [], isLoading } = useQuery<
    {
      // TODO: programId
      workoutId: number;
      countExercises: number;
      expendSeconds: number;
      expendCalories: number;
      date: Date;
    }[]
  >({
    queryKey: ["history"],
    queryFn: async () => axios.get("/sw/__history/").then(({ data }) => data),
  });

  if (isLoading && false) {
    return <SpinBlock />;
  }

  const programs = data.filter((d) => date.isSame(d.date, "day"));

  const minutes = TimeHelper.getMinutes(
    programs.reduce((acc, curr) => acc + curr.expendSeconds, 0)
  );

  const kkal = programs.reduce((acc, curr) => acc + curr.expendCalories, 0);

  const items = [
    {
      icon: TbBarbellFilled,
      iconColor: "red",
      text: programs.length,
    },
    {
      icon: AiOutlineClockCircle,
      iconColor: "green",
      text: `${minutes} mins`,
    },
    {
      icon: AiOutlineFire,
      iconColor: "orange",
      text: `${kkal} kkal`,
    },
  ];

  return (
    <Flex direction="column" gap={4} overflow="hidden" flex={1}>
      <Flex justifyContent="space-between" alignItems="center">
        <Span
          fontSize="l"
          fontWeight="semibold"
          _firstLetter={{ textTransform: "uppercase" }}
        >
          Today, Dec 22
        </Span>
        <Flex gap={2} fontSize="sm">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <Flex alignItems="center" gap={1} key={item.text}>
                <Icon color={item.iconColor} />
                <Span>{item.text}</Span>
              </Flex>
            );
          })}
        </Flex>
      </Flex>

      {programs.length === 0 ? (
        <Center flex={1}>
          <Flex flexDirection="column" textAlign="center" gap={2}>
            <Span fontSize="xl" fontWeight="semibold">
              Empty
            </Span>
            <Span>You did not exercise on this date</Span>
          </Flex>
        </Center>
      ) : (
        <Flex direction="column" gap={4} flex={1} overflow="auto">
          {programs.map((program) => {
            const exercise = exercisesMapById[program.workoutId];

            return (
              <Flex
                height={112}
                minHeight={112}
                gap={4}
                alignItems="center"
                key={dayjs(program.date).toString()}
                overflowY="scroll"
              >
                <Box height="100%" aspectRatio="1/1">
                  <ImageWithLQIP borderRadius="lg" {...exercise.image} />
                </Box>
                <Flex
                  direction="column"
                  height="80%"
                  justifyContent="space-between"
                >
                  <Span fontSize="2xl" lineClamp={1}>
                    {exercise.title}
                  </Span>
                  <Flex gap={2} fontSize="sm">
                    <Span>
                      {TimeHelper.getMinutes(program.expendSeconds)} mins
                    </Span>
                    <Span>{program.expendCalories} kcal</Span>
                  </Flex>
                  <Flex fontSize="sm">
                    <Span color="gray">
                      {dayjs(program.date)
                        .subtract(program.expendSeconds, "second")
                        .format("HH:mm")}
                      - {dayjs(program.date).format("HH:mm")}
                    </Span>
                  </Flex>
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      )}
    </Flex>
  );
};

const locale = "en";

export default function History() {
  const [value, setValue] = useState<dayjs.Dayjs>(dayjs());
  const [month, setMonth] = useState(dayjs().startOf("month"));

  return (
    <PageWithNavigation>
      <PageWithPadding>
        <PageWithHeader centerElement="history">
          <Flex width="100%" paddingX="20px" flex={1} overflow="hidden">
            <Flex direction="column" width="100%" flex={1} gap={4}>
              <MonthlyCalendar
                locale={locale}
                value={value}
                onChange={(d) => {
                  setValue(d);
                }}
                month={month}
                onMonthChange={(d) => {
                  setMonth(d);
                }}
                minDate={dayjs().subtract(2, "year")}
                maxDate={dayjs().add(2, "year")}
              />
              <List date={value} />
            </Flex>
          </Flex>
        </PageWithHeader>
      </PageWithPadding>
    </PageWithNavigation>
  );
}
