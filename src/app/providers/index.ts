import { composeProviders as cP } from "@/shared/utils";
import { ChakraProvider } from "./ChakraProvider";
import { QueryProvider } from "./QueryProvider";

export const composeProviders = cP(ChakraProvider, QueryProvider);
