import { InformationBlock } from "@/features/InformationBlock";
import { PageWithHeader } from "@/shared/ui/PageWithHeader";
import { PageWithNavigation } from "@/shared/ui/PageWithNavigation";
import { PageWithPadding } from "@/shared/ui/PageWithPadding";
import { SpinBlock } from "@/shared/ui/SpinBlock";
import { Box, Flex, Span } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import HeatMap from "@uiw/react-heat-map";
import axios from "axios";
import dayjs from "dayjs";
import { useLayoutEffect, useState } from "react";

const convertDate = (date: string | Date) => dayjs(date).format("YYYY/MM/DD");

export default function Report() {
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

  const [v, total] = data.reduce(
    (acc, curr) => {
      const { expendCalories, expendSeconds, date } = curr;
      const contertedDate = convertDate(date);
      const [value, total] = acc;

      if (!value[contertedDate]) {
        value[contertedDate] = {
          date: contertedDate,
          count: 0,
        };
      }
      value[contertedDate].count += expendCalories;

      total["countExercises"] += 1;
      total["expendSeconds"] += expendSeconds;
      total["expendCalories"] += expendCalories;

      return acc;
    },
    [{}, { countExercises: 0, expendSeconds: 0, expendCalories: 0 }] as [
      Record<
        string,
        {
          date: string;
          count: number;
        }
      >,
      {
        countExercises: number;
        expendSeconds: number;
        expendCalories: number;
      },
    ]
  );

  const value = Object.values(v).map((obj) => obj);

  const [showMap, setShowMap] = useState(false);

  useLayoutEffect(() => {
    setShowMap(true);
  }, []);

  return (
    <PageWithNavigation>
      <PageWithPadding>
        <PageWithHeader centerElement="report">
          <Flex flexDirection="column" flex={1} gap={4}>
            <Span
              fontSize="l"
              fontWeight="semibold"
              _firstLetter={{ textTransform: "uppercase" }}
            >
              Statistics
            </Span>
            {isLoading && false ? (
              <SpinBlock />
            ) : (
              <Flex flexDirection="column" gap={4}>
                <InformationBlock {...total} />
                <Box width="100%" overflowY="auto">
                  {showMap && (
                    <HeatMap
                      value={value}
                      width={720}
                      startDate={new Date("2025/01/01")}
                      endDate={new Date("2025/12/31")}
                      rectSize={11}
                    />
                  )}
                </Box>
              </Flex>
            )}
          </Flex>
        </PageWithHeader>
      </PageWithPadding>
    </PageWithNavigation>
  );
}
