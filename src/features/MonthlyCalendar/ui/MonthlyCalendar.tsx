import { Button, Flex, Grid, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import { Weakdays } from "./Weekdays";
import { Header } from "./Header";
import { buildMonthGrid, isDateDisabled } from "./utils";
import { useCallback, useEffect, useState } from "react";

const cellOutsideStyles = {
  color: "gray",
};

const todayStyles = {
  border: "2px solid blue",
};

const selectedStyles = {
  background: "blue",
  color: "white",
};

export type StartOfWeek = 0 | 1;

export type Props = {
  value?: dayjs.Dayjs | null;
  month?: dayjs.Dayjs;
  startOfWeek?: StartOfWeek; // 0=вс, 1=пн
  locale?: string; // "ru" по умолчанию
  minDate?: dayjs.Dayjs;
  maxDate?: dayjs.Dayjs;
  highlightToday?: boolean; // default true
  highlightSelected?: boolean; // default true
  onMonthChange?: (month: dayjs.Dayjs) => void;
  disabledDates?: (date: dayjs.Dayjs) => boolean;
  onChange: (date: dayjs.Dayjs) => void;
};

const MonthlyCalendar: React.FC<Props> = ({
  value = null,
  month,
  startOfWeek = 1,
  locale = "en",
  minDate,
  maxDate,
  highlightToday = true,
  highlightSelected = true,
  onMonthChange,
  disabledDates,
  onChange,
}) => {
  const today = dayjs().locale(locale);
  const initialDisplay = month
    ? month.clone()
    : (value ?? today).clone().startOf("month");
  const [innerMonth, setInnerMonth] = useState<dayjs.Dayjs>(
    initialDisplay.startOf("month")
  );
  const displayMonth = month ? month.startOf("month") : innerMonth;
  const days = buildMonthGrid(displayMonth, startOfWeek);
  const monthLabel = displayMonth.locale(locale).format("MMMM YYYY");

  useEffect(() => {
    if (month) return;
    setInnerMonth((prev) => {
      const next = (value ?? today).startOf("month");
      return prev.isSame(next, "month") ? prev : next;
    });
  }, [month, value, today]);

  const changeMonth = useCallback(
    (deltaMonths: number) => {
      const next = displayMonth.add(deltaMonths, "month");
      if (onMonthChange) onMonthChange(next);
      else setInnerMonth(next);
    },
    [onMonthChange, setInnerMonth]
  );

  const trySelect = (d: dayjs.Dayjs) => {
    if (isDateDisabled(d, { minDate, maxDate, disabledDates })) return;
    onChange(d);
    if (!d.isSame(displayMonth, "month")) {
      if (onMonthChange) onMonthChange(d.startOf("month"));
      else setInnerMonth(d.startOf("month"));
    }
  };

  return (
    <Flex userSelect="none" width="100%" flexDirection="column" gap={4}>
      <Header changeMonth={changeMonth} monthLabel={monthLabel} />
      <Flex width="100%" flexDirection="column">
        <Weakdays locale={locale} startOfWeek={startOfWeek} />

        <Grid
          aria-label={`Календарь: ${monthLabel}`}
          templateColumns="repeat(7, 1fr)"
          gap={1}
        >
          {days.map((d) => {
            const inCurrentMonth = d.isSame(displayMonth, "month");
            const isToday = highlightToday && d.isSame(today, "day");
            const isSelected =
              highlightSelected && !!value && d.isSame(value, "day");
            const disabled = isDateDisabled(d, {
              minDate,
              maxDate,
              disabledDates,
            });

            const content = d.date();

            const handleClick = () => {
              if (!disabled) {
                trySelect(d);
              }
            };

            return (
              <Button
                background="white"
                key={d.toString()}
                onClick={handleClick}
                disabled={disabled}
                borderRadius="full"
                aspectRatio="1/1"
                color="black"
                {...(inCurrentMonth ? {} : cellOutsideStyles)}
                {...(isToday ? todayStyles : {})}
                {...(isSelected ? selectedStyles : {})}
              >
                <Text>{content}</Text>
              </Button>
            );
          })}
        </Grid>
      </Flex>
    </Flex>
  );
};

export default MonthlyCalendar;
