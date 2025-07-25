import type { Provider as P } from "@/shared/utils/composeProviders/types";
import {
  ChakraProvider as CP,
  createSystem,
  defaultConfig,
} from "@chakra-ui/react";
import "@fontsource/roboto/400.css";

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "Roboto" },
        body: { value: "Roboto" },
      },
    },
  },
});

export const ChakraProvider: P = ({ children }) => (
  <CP value={system}>{children}</CP>
);
