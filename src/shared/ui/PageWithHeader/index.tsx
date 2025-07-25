import { Flex } from "@chakra-ui/react";
import type { FC, ReactNode, ComponentProps } from "react";

import { Header } from "@/widgets/Header";

type Props = {
  children: ReactNode;
} & ComponentProps<typeof Header>;

export const PageWithHeader: FC<Props> = ({ children, ...props }) => (
  <Flex
    direction="column"
    gap={4}
    flex={1}
    overflowY="auto"
    _scrollbar={{
      display: "none",
    }}
  >
    <Header {...props} />
    {children}
  </Flex>
);
