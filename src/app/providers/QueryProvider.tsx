import type { Provider as P } from "@/shared/utils/composeProviders/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const QueryProvider: P = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
