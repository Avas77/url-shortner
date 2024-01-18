import { useEffect, useState } from "react";
import "./App.css";
import { getShortenURL } from "./api";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import Nav from "./components/Nav/Nav";
import HeroBannerLeft from "./components/HeroBannerLeft";

function App() {
  const [url, setUrl] = useState("");

  const shortenUrl = async () => {
    console.log(url);
    getShortenURL(url);
  };

  return (
    <Box>
      <Nav />
      <Box display={"flex"} mt="50px" px={"60px"}>
        <HeroBannerLeft />
        <Box
          display={"flex"}
          flexDirection={"column"}
          flex={1}
          ml="40px"
          justifyContent={"center"}
        >
          <Input
            placeholder="Enter Long URL"
            variant={"filled"}
            border={"1px solid #f0f0f0"}
            p="0.8rem"
            borderRadius={"10px"}
            w={"60%"}
            mb="2rem"
            onChange={(event) => setUrl(event.target.value)}
          />
          <Input
            placeholder="Enter Custom URL"
            variant={"filled"}
            border={"1px solid #f0f0f0"}
            p="0.8rem"
            borderRadius={"10px"}
            w={"60%"}
          />
          <Button
            variant={"solid"}
            bgColor={"teal"}
            w={"30%"}
            p={"0.8rem"}
            borderRadius={"10px"}
            mt="2rem"
            onClick={shortenUrl}
            color="#fff"
          >
            Shorten it
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
