'use client'

import { Flex } from '@chakra-ui/react'
import { Fragment } from 'react'
import NavBar from '@/containers/landing-page/navbar/index'
import Hero from '@/containers/landing-page/hero/index'
import Services from '@/containers/landing-page/services/index'
import Experiences from '@/containers/landing-page/experiences/index'
import Contact from '@/containers/landing-page/contact/index'

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
