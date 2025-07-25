import { Flex } from "@chakra-ui/react";
import type { Route } from "./+types/home";
import { WorkoutList } from "@/widgets/WorkoutList";
import { BlockWithTitle } from "@/shared/ui/BoxWithTitle";
import { PageWithNavigation } from "@/shared/ui/PageWithNavigation";
import { PageWithPadding } from "@/shared/ui/PageWithPadding";
import { PageWithHeader } from "@/shared/ui/PageWithHeader";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hello Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <PageWithNavigation>
      <PageWithPadding>
        <PageWithHeader>
          <Flex direction="column" height="100%" overflow="hidden">
            <BlockWithTitle title="workout plan for you">
              <WorkoutList />
            </BlockWithTitle>
          </Flex>
        </PageWithHeader>
      </PageWithPadding>
    </PageWithNavigation>
  );
}
