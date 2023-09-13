"use client";

import { ArrowForwardIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  Container,
  Divider,
  Flex,
  HStack,
  Heading,
  Highlight,
  Spacer,
  Stack,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
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
      width={"100vw"}
      maxWidth={"1200px"}
      direction={"row"}
      align={"center"}
      justify={"center"}
      marginBottom={["none", "none", "10%", "10%"]}
      justifySelf={"flex-start"}
      marginTop={"1%"}
    >
      <Button variant={"ghost"}>Logo here :3</Button>
      <Spacer />
      <ButtonGroup variant={"ghost"} spacing={4}>
        <Button display={["none", "none", "inline", "inline"]}>Services</Button>
        <Button display={["none", "none", "inline", "inline"]}>
          Portfolios
        </Button>
        <Button display={["none", "none", "inline", "inline"]}>
          Experiences
        </Button>
        <Button>Blog</Button>
      </ButtonGroup>
      <Spacer display={["none", "none", "inline", "inline"]} />

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
        <Button
          display={["none", "none", "inline", "inline"]}
          marginRight={"32px"}
          paddingRight={"0px"}
        >
          Resume
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

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
};

const Services = () => {
  const { colorMode } = useColorMode();
  console.log("🚀 ~ file: page.tsx:155 ~ Services ~ colorMode:", colorMode);
  const bg = useColorModeValue("#FBFBFB", "#202736");
  return (
    <Flex
      minWidth={"100vw"}
      minHeight={"100vh"}
      direction={"column"}
      align={"center"}
      justify={"center"}
      backgroundColor={bg}
    >
      <Container mt={"8%"} mb={"8%"} padding={0} centerContent>
        <Text>Services</Text>
        <Heading>Specialized in</Heading>
      </Container>

      <Flex
        width={"100vw"}
        justify={"space-evenly"}
        align={"center"}
        direction={["column", "column", "row", "row"]}
      >
        <Card
          width={["100%", "100%", "361px", "361px"]}
          mb={"4%"}
          height={"294px"}
          display={"flex"}
          align={"center"}
          justify={"center"}
        >
          {colorMode === "light" ? (
            <ReactSVG src="Crown.svg" />
          ) : (
            <ReactSVG src="CrownDarkMode.svg" />
          )}
          <Heading marginY={["20px", "20px"]} fontSize={"16px"}>
            Cloud
          </Heading>
          <Text width={"274px"} textAlign={"center"}>
            Deploy your applications with low cost and security
          </Text>
        </Card>

        <Card
          width={["100%", "100%", "361px", "361px"]}
          mb={"4%"}
          height={"294px"}
          display={"flex"}
          align={"center"}
          justify={"center"}
        >
          {colorMode === "light" ? (
            <ReactSVG src="Crown.svg" />
          ) : (
            <ReactSVG src="CrownDarkMode.svg" />
          )}
          <Heading marginY={["20px", "20px"]} fontSize={"16px"}>
            Application Development
          </Heading>
          <Text width={"274px"}>
            Standard designing, building, and implementing your applications
            with documentation.
          </Text>
        </Card>

        <Card
          width={["100%", "100%", "361px", "361px"]}
          mb={"4%"}
          height={"294px"}
          display={"flex"}
          align={"center"}
          justify={"center"}
        >
          {colorMode === "light" ? (
            <ReactSVG src="Crown.svg" />
          ) : (
            <ReactSVG src="CrownDarkMode.svg" />
          )}
          <Heading marginY={["20px", "20px"]} fontSize={"16px"}>
            Web Development
          </Heading>
          <Text width={"274px"}>
            Create and maintain your websites and also take care of its
            performance and traffic capacity.
          </Text>
        </Card>
      </Flex>
    </Flex>
  );
};

const Experiences = () => {
  const [selectedExperience, setSelectedExperience] = useState("infleux");
  const bg = useColorModeValue("#FBFBFB", "#202736");
  const jobHeaderTextColor = useColorModeValue("#232E35", "#FBFBFB");
  const jobDescriptionTextColor = useColorModeValue("#656D72", "#FBFBFB");
  const buttonBackground = useColorModeValue("#FBFBFB", "#1A202C");

  return (
    <Flex
      width={"100vw"}
      minHeight={"100vh"}
      align={"center"}
      justify={["center", "center", "space-evenly", "space-evenly"]}
      backgroundColor={bg}
      direction={["column", "column", "row", "row"]}
    >
      <Flex
        direction={"column"}
        align={"flex-start"}
        justify={"center"}
        mb={["10%", "10%", 0, 0]}
        // width={'50%'}
      >
        <Box mb={"10%"}>
          <Text
            display={"inline"}
            fontSize={12}
            fontWeight={"medium"}
            color={"#656D72"}
          >
            CARRER PATH
          </Text>
          <Heading>Work Experiences</Heading>
        </Box>
        <ButtonGroup variant={"ghost"} spacing={4}>
          <Button
            color={"#7E74F1"}
            width={"280px"}
            onClick={() => setSelectedExperience("infleux")}
            background={buttonBackground}
            // style={selectedExperience === 'infleux' ? { background: 'FBFBFB' }}
          >
            Infleux
            <Spacer />
            <ArrowForwardIcon />
          </Button>
        </ButtonGroup>
      </Flex>

      <Flex
        direction={"column"}
        align={["center", "center", "flex-start", "flex-start"]}
        justify={"center"}
        width={['100%', '100%', '50%', '50%']}
      >
        <Flex
          direction={"column"}
          justify={"space-around"}
          align={["center", "center", "flex-start", "flex-start"]}
          mb={"5%"}
        >
          <Text fontSize={18} fontWeight={"medium"} color={jobHeaderTextColor}>
            Front-end Developer infleux .co
          </Text>
          <Text fontSize={14} mb={4}>
            Sao Paulo, Brazil
          </Text>
          <Text fontSize={14} mb={4} fontWeight={500}>
            Out 2022 - Present · Full-time
          </Text>
          <Stack
            wrap={"wrap"}
            direction={"row"}
            justify={["center", "center", "flex-start", "flex-start"]}
            spacing={2}
            width={"100%"}
          >
            <Badge>React</Badge>
            <Badge>Node</Badge>
            <Badge>FeathersJS</Badge>
            <Badge>NextJS</Badge>
            <Badge>AWS</Badge>
            <Badge>MongoDB</Badge>
            <Badge>MySQL</Badge>
            <Badge>Postgrees</Badge>
          </Stack>
        </Flex>
        <Divider width={'80%'} mb={'5%'} />
        <Stack width={'80%'} direction={"column"} spacing={2}>
          <Text color={jobDescriptionTextColor}>
            - Software developer with experience in backend and frontend
            development. Skilled in using Node.js, FeathersJS, MongoDB, MySQL,
            PostgreSQL, React, Next.js, React Native, and React-Admin. Expertise
            in building APIs and working with various databases for backend
            development. Proficient in developing web applications using Next.js
            and mobile applications using React Native, as well as
            administrating web applications using React-Admin.empresa
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default function Home() {
  return (
    <Fragment>
      <Flex
        width={"100vw"}
        minHeight={"100vh"}
        direction={"column"}
        align={"center"}
        justify={"flex-start"}
      >
        <NavBar />
        <Hero />
      </Flex>

      <Services />
      <Experiences />
    </Fragment>
  );
}
