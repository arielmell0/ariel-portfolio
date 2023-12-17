"use client";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Flex,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-scroll";

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
      <Button variant={"ghost"}>:D</Button>
      <Spacer />
      <ButtonGroup variant={"ghost"} spacing={4}>
        <Link
          activeClass="servicesActive"
          to="services"
          smooth={true}
          duration={500}
        >
          <Button display={["none", "none", "inline", "inline"]}>
            Services
          </Button>
        </Link>
        {/* <Button display={['none', 'none', 'inline', 'inline']}>
            Portfolios
          </Button> */}
        <Link
          activeClass="experiencesActive"
          to="experiences"
          smooth={true}
          duration={500}
        >
          <Button display={["none", "none", "inline", "inline"]}>
            Experiences
          </Button>
        </Link>
        <Link
          activeClass="contactActive"
          to="contact"
          smooth={true}
          duration={500}
        >
          <Button display={["none", "none", "inline", "inline"]}>
            Contact
          </Button>
        </Link>
        {/* <Button>Blog</Button> */}
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
        {/* <Button
            display={['none', 'none', 'inline', 'inline']}
            marginRight={'32px'}
            paddingRight={'0px'}
          >
            Resume
          </Button> */}
      </ButtonGroup>
    </Flex>
  );
};

export default NavBar;
