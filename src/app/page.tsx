'use client'

import { ArrowForwardIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
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
  Input,
  Spacer,
  Stack,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
  useToast
} from '@chakra-ui/react'
import { Fragment, useState } from 'react'
import { ReactSVG } from 'react-svg'
import { Link, Element } from 'react-scroll'
import { useForm } from "react-hook-form"
import NavBar from '@/containers/landing-page/navbar/index'
import Hero from '@/containers/landing-page/hero/index'

const Services = () => {
  const { colorMode } = useColorMode()
  const bg = useColorModeValue('#FBFBFB', '#202736')
  return (
    <Element name="services">
      <Flex
        minWidth={'100vw'}
        minHeight={'100vh'}
        direction={'column'}
        align={'center'}
        justify={'center'}
        backgroundColor={bg}
      >
        <Container mt={'8%'} mb={'8%'} padding={0} centerContent>
          <Text>Services</Text>
          <Heading>Specialized in</Heading>
        </Container>

        <Flex
          width={'100vw'}
          justify={'space-evenly'}
          align={'center'}
          direction={['column', 'column', 'row', 'row']}
        >
          <Card
            width={['100%', '100%', '361px', '361px']}
            mb={'4%'}
            height={'294px'}
            display={'flex'}
            align={'center'}
            justify={'center'}
          >
            {colorMode === 'light' ? (
              <ReactSVG src="Crown.svg" />
            ) : (
              <ReactSVG src="CrownDarkMode.svg" />
            )}
            <Heading marginY={['20px', '20px']} fontSize={'16px'}>
              Cloud
            </Heading>
            <Text width={'274px'} textAlign={'center'}>
              Deploy your applications with low cost and security
            </Text>
          </Card>

          <Card
            width={['100%', '100%', '361px', '361px']}
            mb={'4%'}
            height={'294px'}
            display={'flex'}
            align={'center'}
            justify={'center'}
          >
            {colorMode === 'light' ? (
              <ReactSVG src="Crown.svg" />
            ) : (
              <ReactSVG src="CrownDarkMode.svg" />
            )}
            <Heading marginY={['20px', '20px']} fontSize={'16px'}>
              Application Development
            </Heading>
            <Text width={'274px'}>
              Standard designing, building, and implementing your applications
              with documentation.
            </Text>
          </Card>

          <Card
            width={['100%', '100%', '361px', '361px']}
            mb={'4%'}
            height={'294px'}
            display={'flex'}
            align={'center'}
            justify={'center'}
          >
            {colorMode === 'light' ? (
              <ReactSVG src="Crown.svg" />
            ) : (
              <ReactSVG src="CrownDarkMode.svg" />
            )}
            <Heading marginY={['20px', '20px']} fontSize={'16px'}>
              Web Development
            </Heading>
            <Text width={'274px'}>
              Create and maintain your websites and also take care of its
              performance and traffic capacity.
            </Text>
          </Card>
        </Flex>
      </Flex>
    </Element>
  )
}

const Experiences = () => {
  const [selectedExperience, setSelectedExperience] = useState('infleux')
  const bg = useColorModeValue('#FBFBFB', '#202736')
  const jobHeaderTextColor = useColorModeValue('#232E35', '#FBFBFB')
  const jobDescriptionTextColor = useColorModeValue('#656D72', '#FBFBFB')
  const buttonBackground = useColorModeValue('#FBFBFB', '#1A202C')

  return (
    <Element name="experiences">
      <Flex
        width={'100vw'}
        minHeight={'100vh'}
        align={'center'}
        justify={['center', 'center', 'space-evenly', 'space-evenly']}
        backgroundColor={bg}
        direction={['column', 'column', 'row', 'row']}
      >
        <Flex
          direction={'column'}
          align={'flex-start'}
          justify={'center'}
          mb={['10%', '10%', 0, 0]}
          // width={'50%'}
        >
          <Box mb={'10%'}>
            <Text
              display={'inline'}
              fontSize={12}
              fontWeight={'medium'}
              color={'#656D72'}
            >
              CARRER PATH
            </Text>
            <Heading>Work Experiences</Heading>
          </Box>
          <ButtonGroup variant={'ghost'} spacing={4}>
            <Button
              color={'#7E74F1'}
              width={'280px'}
              onClick={() => setSelectedExperience('infleux')}
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
          direction={'column'}
          align={['center', 'center', 'flex-start', 'flex-start']}
          justify={'center'}
          width={['100%', '100%', '50%', '50%']}
        >
          <Flex
            direction={'column'}
            justify={'space-around'}
            align={['center', 'center', 'flex-start', 'flex-start']}
            mb={'5%'}
          >
            <Text
              fontSize={18}
              fontWeight={'medium'}
              color={jobHeaderTextColor}
            >
              Front-end Developer infleux .co
            </Text>
            <Text fontSize={14} mb={4}>
              Sao Paulo, Brazil
            </Text>
            <Text fontSize={14} mb={4} fontWeight={500}>
              Out 2022 - Present · Full-time
            </Text>
            <Stack
              wrap={'wrap'}
              direction={'row'}
              justify={['center', 'center', 'flex-start', 'flex-start']}
              spacing={2}
              width={'100%'}
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
          <Stack width={'80%'} direction={'column'} spacing={2}>
            <Text color={jobDescriptionTextColor}>
              - Software developer with experience in backend and frontend
              development. Skilled in using Node.js, FeathersJS, MongoDB, MySQL,
              PostgreSQL, React, Next.js, React Native, and React-Admin.
              Expertise in building APIs and working with various databases for
              backend development. Proficient in developing web applications
              using Next.js and mobile applications using React Native, as well
              as administrating web applications using React-Admin.empresa
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </Element>
  )
}

const Contact = () => {
  const bg = useColorModeValue('#FBFBFB', '#202736')
  const { colorMode } = useColorMode()

  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const toast = useToast()

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data: {name: string, email: string, message: string}) => {
    setIsLoading(true)
    try {
      await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify({accessKey: '26b9acef-4835-4bb9-bcb0-814e4bae0e99', ...data}),
        headers: { 'Content-Type': 'application/json' }
      })

      toast({
        title: 'Email sent.',
        description: "Your email has been successfully sent.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    } catch (e) {
      console.log('An error occurred', e)
      toast({
        title: 'Email error.',
        description: "Oops, the email failed to send.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
    reset()
    setIsLoading(false)
  }

  return (
    <Element name="contact">
      <Flex
        minWidth={'100vw'}
        minHeight={'100vh'}
        direction={['column-reverse', 'column-reverse', 'row', 'row']}
        align={'center'}
        justify={'space-evenly'}
        backgroundColor={bg}
      >
        <VStack width={'25vw'} spacing={4}>
          <Input
            {...register("name", { required: { value: true, message: 'Enter your name' }})}
            width={['80vw', '80vw', '100%', '100%']}
            placeholder="Name"
            height="48px"
          />
          <Input
            {...register("email", {
              required: { value: true, message: 'Enter your email address' },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email",
              },
            })}
            width={['80vw', '80vw', '100%', '100%']}
            placeholder="Email"
            height="48px"
          />
          <Input
            {...register("message", { required: { value: true, message: 'Enter a message' }, minLength: { value: 10, message: 'Message need a minimum length of 10 characters'} })}
            width={['80vw', '80vw', '100%', '100%']}
            placeholder="Message"
            height="189px"
          />
          <Button
            backgroundColor={'#7E74F1'}
            width={['80vw', '80vw', '100%', '100%']}
            height={'48px'}
            marginTop={4}
            color={'white'}
            disabled={isLoading}
            onClick={handleSubmit(onSubmit)}
          >
            Send message
          </Button>
          {errors && (
            Object.keys(errors).map(key => (
              <Text color='#ffcc00' key={key}>{errors[key].message}</Text>
            ))
          )}
        </VStack>

        <VStack
          align={'flex-start'}
          justify={'space-between'}
          height={'264px'}
          spacing={4}
          marginBottom={[0, 0, 2, 2]}
        >
          <HStack justify={'flex-start'}>
            {colorMode === 'light' ? (
              <ReactSVG src="Localization.svg" />
            ) : (
              <ReactSVG src="LocalizationDarkMode.svg" />
            )}
            <VStack ml={'16px'}>
              <Text fontWeight={700}>Address</Text>
              <Text>Torres, Brazil</Text>
            </VStack>
          </HStack>

          <HStack>
            {colorMode === 'light' ? (
              <ReactSVG src="Phone.svg" />
            ) : (
              <ReactSVG src="PhoneDarkMode.svg" />
            )}
            <VStack ml={'16px'}>
              <Text fontWeight={700}>Phone</Text>
              <Text>(48) 991396702</Text>
            </VStack>
          </HStack>

          <HStack>
            {colorMode === 'light' ? (
              <ReactSVG src="Email.svg" />
            ) : (
              <ReactSVG src="EmailDarkMode.svg" />
            )}
            <VStack ml={'16px'}>
              <Text fontWeight={700}>Email</Text>
              <Text>arieldemello@hotmail.com</Text>
            </VStack>
          </HStack>
        </VStack>
      </Flex>
    </Element>
  )
}

export default function Home() {
  return (
    <Fragment>
      <Flex
        width={'100vw'}
        minHeight={'100vh'}
        direction={'column'}
        align={'center'}
        justify={'flex-start'}
      >
        <NavBar />
        <Hero />
      </Flex>

      <Services />
      <Experiences />
      <Contact />
    </Fragment>
  )
}
