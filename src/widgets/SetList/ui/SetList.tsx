import { SetItem } from "@/entities/SetItem";
import type { Workout } from "@/shared/api/model";
import { Flex } from "@chakra-ui/react";

type Props = {
  items: Workout["sets"];
};

export default function SetList({ items }: Props) {
  return (
    <Flex direction="column">
      {items.map((item, index) => (
        <SetItem key={index} {...item} />
      ))}
    </Flex>
  );
}
