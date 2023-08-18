'use client'

import { Button } from '@chakra-ui/react'

type ContainerProps = {
  children: JSX.Element
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <div style={{ width: '100vw', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    {children}
  </div>
)

export default function Home() {
  return (
    <Container>
      <Button colorScheme='red'>Button</Button>
    </Container>
  )
}
