import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Star from "../../icons/star";

const Nav = () => {
  return (
    <Box
      bgColor={"#1447FC"}
      height="84px"
      display={"flex"}
      alignItems={"center"}
      padding={"5px"}
    >
      <Text
        color="#fff"
        display={"flex"}
        alignItems={"center"}
        gap="5px"
        ml="200px"
      >
        <Star />
        <span>Shorty URL</span>
      </Text>
    </Box>
  );
};

export default Nav;
