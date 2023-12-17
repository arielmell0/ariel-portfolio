"use client"

import {
  Card,
  Container,
  Flex,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react"
import { ReactSVG } from "react-svg"
import { Element } from "react-scroll"

const Services = () => {
  const { colorMode } = useColorMode()
  const bg = useColorModeValue("#FBFBFB", "#202736")
  return (
    <Element name="services">
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
    </Element>
  )
}

export default Services
