import type { Workout } from "@/shared/api/model";
import { PageWithPadding } from "@/shared/ui/PageWithPadding";
import { Box, Button, Flex, Heading, Span } from "@chakra-ui/react";
import { Header } from "./Header";
import { SetList } from "@/widgets/SetList";

type Props = {
  onClick: () => void;
} & Workout;

export default function WorkoutPreview({ onClick, image, name, sets }: Props) {
  return (
    <Flex direction="column" flex={1} overflow="hidden">
      <Header image={image} />
      <PageWithPadding flex={1}>
        <Heading lineHeight={1.33} fontSize="3xl" fontWeight="bold">
          {name}
        </Heading>
        <Box
          flex={1}
          overflowY="scroll"
          mb={4}
          _scrollbar={{
            display: "none",
          }}
        >
          <SetList items={sets} />
        </Box>
        <Button onClick={onClick} background="blue" size="xl" rounded="full">
          <Span _firstLetter={{ textTransform: "uppercase" }} fontWeight="bold">
            start
          </Span>
        </Button>
      </PageWithPadding>
    </Flex>
  );
}
