import { Box, Grid, Text } from "@chakra-ui/react";
import { memo } from "react";
import { getWeekdayShortNames } from "./utils";

export type StartOfWeek = 0 | 1;

type Props = {
  startOfWeek: StartOfWeek; // 0=вс, 1=пн
  locale: string; // "ru" по умолчанию
};

export const Weakdays: React.NamedExoticComponent<Props> = memo(
  ({ startOfWeek, locale }) => {
    const weekdayNames = getWeekdayShortNames(locale, startOfWeek);

    return (
      <Grid templateColumns="repeat(7, 1fr)" gap="4px">
        {weekdayNames.map((w) => (
          <Box key={w} className="mc-weekday">
            <Text textAlign="center">{w}</Text>
          </Box>
        ))}
      </Grid>
    );
  }
);
