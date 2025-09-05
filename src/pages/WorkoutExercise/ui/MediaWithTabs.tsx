import type { Workout } from "@/shared/api/model";
import { ImageWithLQIP } from "@/shared/ui/ImageWithLQIP";
import { Box, Span, Tabs } from "@chakra-ui/react";
import type { FC } from "react";

import { chakra } from "@chakra-ui/react";

type Props = Pick<
  Workout["sets"][number]["exercises"][number]["exercise"],
  "image" | "video"
>;

export const MediaWithTabs: FC<Props> = ({ image, video }) => {
  return (
    <Tabs.Root
      fitted={true}
      defaultValue="image"
      unmountOnExit={true}
      colorScheme="blue"
      size="lg"
      // TODO: добавить тип
      variant={"pill" as never}
      colorPalette="blue"
      mt="6"
    >
      <Tabs.List>
        <Tabs.Trigger value="image">
          <Span textTransform="capitalize">image</Span>
        </Tabs.Trigger>
        <Tabs.Trigger value="video" disabled={!video}>
          <Span textTransform="capitalize">video</Span>
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="image">
        <Box padding={4}>
          <ImageWithLQIP
            {...image}
            alt="exercive image"
            maxWidth="100%"
            aspectRatio="1/1"
          />
        </Box>
      </Tabs.Content>
      <Tabs.Content value="video">
        {video && (
          <Box padding={4}>
            <chakra.video
              src={video.src}
              loop={true}
              as="video"
              maxWidth="100%"
              aspectRatio="1/1"
              autoPlay={true}
              muted={true}
            />
          </Box>
        )}
      </Tabs.Content>
    </Tabs.Root>
  );
};
