import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { memo } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

type Props = {
  monthLabel: string;
  changeMonth: (value: number) => void;
};

export const Header: React.NamedExoticComponent<Props> = memo(
  ({ changeMonth, monthLabel }) => {
    const onNextHandler = () => changeMonth(1);
    const onPrevHandler = () => changeMonth(-1);

    return (
      <Flex alignItems="center" justifyContent="space-between" gap="12px">
        <Box>
          <Text
            fontSize="xl"
            fontWeight="semibold"
            _firstLetter={{ textTransform: "uppercase" }}
          >
            {monthLabel}
          </Text>
        </Box>
        <Flex gap="4px" role="group" aria-label="Навигация по месяцам">
          <IconButton
            onClick={onPrevHandler}
            aria-label="Предыдущий месяц"
            variant="ghost"
          >
            <AiOutlineLeft />
          </IconButton>
          <IconButton
            onClick={onNextHandler}
            aria-label="Следующий месяц"
            variant="ghost"
          >
            <AiOutlineRight />
          </IconButton>
        </Flex>
      </Flex>
    );
  }
);
