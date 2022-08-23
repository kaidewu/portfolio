import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
    return (
      <Box as="main" pb={8}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Kaide's homepage" />
          <meta name="author" content="Kaide Wu" />
          <title>Kaide Wu</title>
        </Head>
  
        <NavBar path={router.asPath} />
  
        <Container maxW="container.md" pt={14}>
  
          {children}
  
          <Footer />
        </Container>
      </Box>
    )
  }
  
  export default Main