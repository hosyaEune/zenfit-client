import { Flex, Span } from "@chakra-ui/react";
import type { FC, ReactNode } from "react";

type Props = {
  icon: ReactNode;
  count: number;
  description: string;
};

export const Item: FC<Props> = ({ icon, count, description }) => (
  <Flex direction="column" align="center" gap={2}>
    {icon}
    <Span fontSize="xl" fontWeight="bold">
      {count}
    </Span>
    <Span>{description}</Span>
  </Flex>
);
