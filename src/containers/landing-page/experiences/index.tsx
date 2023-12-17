'use client'

import { ArrowForwardIcon } from '@chakra-ui/icons'
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
  useColorModeValue} from '@chakra-ui/react'
import { useState } from 'react'
import { Element } from 'react-scroll'
import Services from '@/containers/landing-page/services/index'

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

export default Experiences