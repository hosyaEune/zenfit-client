import { Image, type ImageProps } from "@chakra-ui/react";
import { useState, type FC } from "react";

import "./style.css";

export const ImageWithLQIP: FC<
  {
    lqip: number;
  } & ImageProps
> = ({ lqip, style, ...props }) => {
  const [isLoad, setIsLoad] = useState(false);

  return (
    <Image
      width="100%"
      height="100%"
      objectFit="cover"
      className="image-with-lqip"
      loading={isLoad ? undefined : "lazy"}
      onLoad={() => setIsLoad(true)}
      style={
        {
          "--lqip": lqip,
          ...style,
        } as typeof style
      }
      {...props}
    />
  );
};
