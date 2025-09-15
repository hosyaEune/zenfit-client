import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import { composeProviders } from "./providers";
import { server } from "@/shared/api";
import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { App as AppSettings } from "@/@singleton/App";

function App() {
  useEffect(() => {
    AppSettings.getInstance().restoreSettings();
    AppSettings.getInstance().requestNoSleep();
  }, []);

  return (
    <Flex
      height="100dvh"
      width="100%"
      maxWidth={820}
      direction="column"
      overflow="hidden"
      margin="0 auto"
    >
      <Outlet />
    </Flex>
  );
}

const AppWithProviders = composeProviders(App);

export default AppWithProviders;

export function shouldRevalidate() {
  return false;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}

export const links: Route.LinksFunction = () => [
  {
    rel: "manifest",
    href: "/manifest.webmanifest",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <script src="/registerSW.js"></script>
      </body>
    </html>
  );
}

export async function loader() {
  const [exercises = [], settings, user] = await Promise.all([
    server.getExercises(),
    server.getSettings(),
    server.getUser(),
  ])
    .then((data) => data)
    .catch(() => []);

  return {
    exercises,
    settings,
    user,
  };
}
