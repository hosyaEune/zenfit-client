import type { Workout } from "@/shared/api/model";
import { ImageWithLQIP } from "@/shared/ui/ImageWithLQIP";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import type { FC } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router";

type Props = {
  image: Workout["image"];
};

export const Header: FC<Props> = ({ image }) => (
  <Box height={140} position="relative" zIndex={1}>
    <ImageWithLQIP
      {...image}
      alt="head"
      zIndex={0}
      inset={0}
      position="absolute"
    />
    <Flex
      zIndex={1}
      backgroundColor="rgba(0,0,0,0.4)"
      position="relative"
      height="100%"
      width="100%"
      alignItems="center"
      padding={6}
    >
      <IconButton
        as={Link}
        // почему-то не работает
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        to="/"
        zIndex={2}
        position="absolute"
        aria-label="back"
        variant="ghost"
      >
        <AiOutlineArrowLeft color="white" />
      </IconButton>
    </Flex>
  </Box>
);
