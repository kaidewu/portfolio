import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { 
  Box,
  Link,
  Center,
  Heading,
  Container,
  SimpleGrid
} from '@chakra-ui/react'

export default function Home() {
  return (
    <Layout>
      <Center>
        <Section delay={0.2}>
          <Heading size="xl" marginTop={"7%"} marginBottom={"0.2em"}>
            Hey, I'm Kaide
          </Heading>
          <Paragraph>
            I am a System Admin working at {" "}
            <Link href='https://laberit.com'>Laberit</Link>.
            Chinese nationality and born in Spain, I live in Spain since I can remenber.
            In my spare time, I study new tecnologies and build some projects like this portfolio.
            You can find me on my {" "}
            <Link href='https://github.com/kaidewu'>Github</Link> and {" "}
            <Link href='https://linkedin.com/in/kaidewu'>Linkedin</Link>.
          </Paragraph>
        </Section>
      </Center>

      <Section delay={0.2}>
        <Heading fontSize={"30px"} variant="page-title" marginTop={"7%"} marginBottom={"0.2em"}>
          Projects
        </Heading>
        <SimpleGrid columns={1} spacing={4} mt={8} w="100%">
          Working...
        </SimpleGrid>
      </Section>
    </Layout>
  )
}

export { getServerSideProps } from '../components/chakra'
