import { AiOutlineClockCircle, AiOutlineFire } from "react-icons/ai";
import { TbBarbellFilled } from "react-icons/tb";
import { Box, Flex } from "@chakra-ui/react";
import { TimeHelper } from "@/shared/helpers/Time";
import type { FunctionComponent } from "react";
import { Item } from "./Item";

type Props = {
  countExercises: number;
  expendSeconds: number;
  expendCalories: number;
};

const InformationBlock: FunctionComponent<Props> = ({
  countExercises,
  expendCalories,
  expendSeconds,
}) => {
  const items = [
    {
      icon: <TbBarbellFilled color="red" size={26} />,
      description: "extensions",
      count: countExercises,
    },
    {
      icon: <AiOutlineClockCircle color="green" size={26} />,
      description: "minutes",
      count: TimeHelper.getMinutes(expendSeconds),
    },
    {
      icon: <AiOutlineFire size={26} color="orange" />,
      description: "kkal",
      count: expendCalories,
    },
  ];

  return (
    <Flex width="100%">
      {items.map((item) => (
        <Box key={item.description} flexBasis="33%">
          <Item {...item} />
        </Box>
      ))}
    </Flex>
  );
};

export default InformationBlock;
