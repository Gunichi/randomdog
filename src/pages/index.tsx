import { Button, Flex, Heading, Link, Progress, Spinner } from '@chakra-ui/react'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {

  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const randomDog = async () => {
    setLoading(true)
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await res.json()
    setMessage(data.message)
    setLoading(false)
  }

  useEffect(() => {
    randomDog()
  }, [])

  if (loading) {
    return (
      <Flex direction="column" align="center" justify="center" minH="100vh">
        <Spinner size='xl' color='yellow.900' />
      </Flex>
    )
  } else {
    return (
      <>
        <Head>
          <title>Random Dog</title>
        </Head>
        <Flex direction="column" align="center" minH="100vh">
          <Heading as="h1" size="2xl" mb={4} mt={4}>
            Bem vindo à um site que mostra um cachorro aleatório! 🐶
          </Heading>
          <img src={message} alt='dog' width='500' height='500' />
          <Button onClick={randomDog} mt={4} bg="yellow.900" color="white" _hover={{ bg: 'yellow.800' }}>
            Novo Cachorro
          </Button>
        </Flex>      
      </>
    )
  }
}
