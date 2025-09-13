import { Center, Spinner } from "@chakra-ui/react";
import type { FC } from "react";

export const SpinBlock: FC = () => (
  <Center height="100%" width="100%">
    <Spinner color="blue" />
  </Center>
);
