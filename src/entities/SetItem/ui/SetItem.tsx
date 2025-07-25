import type { Workout } from "@/shared/api/model";
import { Accordion, List, Span } from "@chakra-ui/react";
import { ExerciseRow } from "./ExerciseRow";

type Props = Workout["sets"][number];

export default function SetItem({ exercises, repeatCount }: Props) {
  const title = exercises.map((exercise) => exercise.exercise.name).join(", ");

  return (
    <Accordion.Root defaultValue={[title]} collapsible={true}>
      <Accordion.Item value={title}>
        <Accordion.ItemTrigger fontSize="md">
          <Span
            flex="1"
            lineClamp={1}
            _firstLetter={{ textTransform: "uppercase" }}
          >
            {title}
          </Span>
          <Span fontWeight="bold">X{repeatCount}</Span>
          <Accordion.ItemIndicator />
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>
            <List.Root gap={4}>
              {exercises.map((exercise) => (
                <List.Item ps={5} key={exercise.exercise.name}>
                  <ExerciseRow {...exercise} />
                </List.Item>
              ))}
            </List.Root>
          </Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  );
}
