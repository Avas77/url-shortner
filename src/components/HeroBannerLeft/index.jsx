import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const HeroBannerLeft = () => {
  return (
    <Box flexBasis={"50%"}>
      <Heading order={1} fontSize={"4rem"} mb="2rem" fontWeight={600}>
        How this works?
      </Heading>
      <Text fontSize={"2rem"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim debitis
        doloremque at magnam ipsa sequi aliquam cumque dolor vero, eaque,
        voluptate
        <br />
        <br />
        praesentium accusantium odio hic nesciunt saepe dolorem qui aliquid.
        Iste veniam corporis mollitia praesentium sunt labore doloribus, aliquam
        sequi?
      </Text>
    </Box>
  );
};

export default HeroBannerLeft;
