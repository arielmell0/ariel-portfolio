'use client'

import {
  Button,
  Flex,
  HStack,
  Input,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
  useToast
} from '@chakra-ui/react'
import { useState } from 'react'
import { ReactSVG } from 'react-svg'
import { Element } from 'react-scroll'
import { useForm } from "react-hook-form"

const Contact = () => {
  const bg = useColorModeValue('#FBFBFB', '#202736')
  const { colorMode } = useColorMode()

  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const toast = useToast()

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data) => {
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

export default Contact