"use client";

import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Highlight,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { ReactSVG } from "react-svg"

const Hero = () => {
  const GithubIcon = useColorModeValue(
    <ReactSVG src="Github.svg" />,
    <ReactSVG src="GithubDarkMode.svg" />
  );
  const InstagramIcon = useColorModeValue(
    <ReactSVG src="Instagram.svg" />,
    <ReactSVG src="InstagramDarkMode.svg" />
  );
  const LinkedinIcon = useColorModeValue(
    <ReactSVG src="Linkedin.svg" />,
    <ReactSVG src="LinkedinDarkMode.svg" />
  );
  const TwitterIcon = useColorModeValue(
    <ReactSVG src="Twitter.svg" />,
    <ReactSVG src="TwitterDarkMode.svg" />
  );
  return (
    <Flex
      width={"80vw"}
      maxWidth={"1200px"}
      direction={["column-reverse", "column-reverse", "row", "row"]}
      align={"center"}
      justify={"space-evenly"}
    >
      <Flex
        direction={"column"}
        align={"center"}
        justify={"center"}
        width={"50%"}
      >
        <Text
          alignSelf={"flex-start"}
          mb={4}
          fontSize={12}
          fontWeight={"medium"}
          color={"#656D72"}
        >
          MY NAME IS
        </Text>
        <Heading alignSelf={"flex-start"} mb={4}>
          <Highlight query="Mello" styles={{ color: "purple.100" }}>
            Ariel Oliveira de Mello
          </Highlight>
        </Heading>
        <Text alignSelf={"flex-start"} textAlign={"start"} mb={4}>
          Creative full-stack developer with more than +1 years of experience in
          enterprise companies and startups. Proficient in JavaScript, Node, and
          React. Passionate about Dev-ops
        </Text>

        <ButtonGroup
          alignSelf={["center", "center", "flex-start", "flex-start"]}
          variant={"ghost"}
          marginBottom={"25px"}
          spacing={2}
        >
          <Button rightIcon={GithubIcon} iconSpacing={0} />
          <Button rightIcon={InstagramIcon} iconSpacing={0} />
          <Button rightIcon={TwitterIcon} iconSpacing={0} />
          <Button rightIcon={InstagramIcon} iconSpacing={0} />
        </ButtonGroup>
      </Flex>
      <Flex
        width={["100%", "100%", "50%", "50%"]}
        height={"450px"}
        align={"center"}
        justify={"center"}
      >
        <ReactSVG
          src="HeroImage.svg"
          beforeInjection={(svg) => {
            const screenSize = window.innerWidth;
            if (screenSize < 768)
              svg.setAttribute("style", "transform: scale(80%)");
          }}
        />
      </Flex>
    </Flex>
  );
}

export default Hero
