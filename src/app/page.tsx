"use client";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  Container,
  Flex,
  HStack,
  Heading,
  Highlight,
  Spacer,
  Text,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { Fragment, useState } from "react";
import HeroImage from "../assets/svg/HeroImage.svg";
import { ReactSVG } from "react-svg";
import { Icon, createIcon } from "@chakra-ui/react";
import Head from "next/head";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      height={"49px"}
      minWidth={"1200px"}
      direction={"row"}
      align={"center"}
      justify={"center"}
      marginBottom={"5%"}
      justifySelf={"flex-start"}
      marginTop={"1%"}
    >
      <Button variant={"ghost"}>Logo here :3</Button>
      <Spacer />
      <ButtonGroup variant={"ghost"} spacing={4}>
        <Button>Services</Button>
        <Button>Portfolios</Button>
        <Button>Experiences</Button>
        <Button>Blog</Button>
      </ButtonGroup>
      <Spacer />

      <ButtonGroup variant={"ghost"} spacing={4}>
        {colorMode === "dark" ? (
          <Button
            rightIcon={<MoonIcon />}
            onClick={toggleColorMode}
            iconSpacing={0}
          />
        ) : (
          <Button
            rightIcon={<SunIcon />}
            onClick={toggleColorMode}
            iconSpacing={0}
          />
        )}
        <Button>Resume</Button>
      </ButtonGroup>
    </Flex>
  );
};

const Hero = () => {
  return (
    <Flex
      maxWidth={"1200px"}
      direction={["column-reverse", "column-reverse", "row", "row"]}
      align={"center"}
      justify={"space-evenly"}
      marginTop={"50px"}
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
        <Text alignSelf={"flex-start"} textAlign={'start'} mb={4}>
          Creative full-stack developer with more than +1 years of experience in
          enterprise companies and startups. Proficient in JavaScript, Node, and
          React. Passionate about Dev-ops
        </Text>

        <ButtonGroup alignSelf={"flex-start"} variant={"ghost"} spacing={2}>
          <Button rightIcon={<ReactSVG src="Github.svg" />} iconSpacing={0} />
          <Button rightIcon={<ReactSVG src="Linkedin.svg" />} iconSpacing={0} />
          <Button rightIcon={<ReactSVG src="Twitter.svg" />} iconSpacing={0} />
          <Button
            rightIcon={<ReactSVG src="Instagram.svg" />}
            iconSpacing={0}
          />
        </ButtonGroup>
      </Flex>
      <Flex
        direction={"column"}
        align={"center"}
        justify={"center"}
        width={"50%"}
      >
        <ReactSVG src="HeroImage.svg" />
      </Flex>
    </Flex>
  );
};

const Services = () => {
  return (
    <Flex
      minWidth={"100vw"}
      minHeight={"100vh"}
      direction={"column"}
      align={""}
      justify={"center"}
      backgroundColor={"#FBFBFB"}
    >
      <Container marginBottom={"104px"} centerContent>
        <Text>Services</Text>
        <Heading>Specialized in</Heading>
      </Container>

      <Flex width={'100vw'} justify={'space-evenly'} align={'center'}>
        <Card
          width={"361px"}
          height={"294px"}
          display={"flex"}
          align={"center"}
          justify={"center"}
        >
          <ReactSVG src="Crown.svg" />
          <Heading marginY={["20px", "20px"]} fontSize={'16px'}>Cloud</Heading>
          <Text width={"274px"} textAlign={'center'}>
            Deploy your applications with low cost and security
          </Text>
        </Card>

        <Card
          width={"361px"}
          height={"294px"}
          display={"flex"}
          align={"center"}
          justify={"center"}
        >
          <ReactSVG src="Crown.svg" />
          <Heading marginY={["20px", "20px"]} fontSize={'16px'}>Application Development</Heading>
          <Text width={"274px"}>
            Standard designing, building, and implementing your applications
            with documentation.
          </Text>
        </Card>

        <Card
          width={"361px"}
          height={"294px"}
          display={"flex"}
          align={"center"}
          justify={"center"}
        >
          <ReactSVG src="Crown.svg" />
          <Heading marginY={["20px", "20px"]} fontSize={'16px'}>Web Development</Heading>
          <Text width={"274px"}>
            Create and maintain your websites and also take care of its
            performance and traffic capacity.
          </Text>
        </Card>
      </Flex>
    </Flex>
  );
};

export default function Home() {
  return (
    <Fragment>
      <Flex
        minWidth={"100vw"}
        minHeight={"100vh"}
        direction={"column"}
        align={"center"}
        justify={"flex-start"}
      >
        <NavBar />
        <Hero />
      </Flex>

      <Services />
    </Fragment>
  );
}
