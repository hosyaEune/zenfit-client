import { WorkoutRow } from "@/entities/WorkoutRow";
import { useGlobalPreloadData } from "@/shared/hooks/useGlobalPreloadData";
import { Center, Flex, Loader } from "@chakra-ui/react";

import { Link } from "react-router";

export default function WorkoutList() {
  const { exercises } = useGlobalPreloadData();

  if (!exercises) {
    return (
      <Center flex={1}>
        <Loader />
      </Center>
    );
  }

  return (
    <Flex
      direction="column"
      gap={4}
      overflowY="auto"
      _scrollbar={{
        display: "none",
      }}
    >
      {(exercises ?? []).map((item) => (
        <Link to={`/workout/${item.id}`} key={item.id}>
          <WorkoutRow {...item} />
        </Link>
      ))}
    </Flex>
  );
}
