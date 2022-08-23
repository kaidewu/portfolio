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
  Container
} from '@chakra-ui/react'

export default function Home() {
  return (
    <Layout>
      <Center>
        <Section delay={0.2}>
          <Heading fontSize={"40px"} variant="page-title" marginTop={"7%"} marginBottom={"0.2em"}>
            Hey, I'm Kaide
          </Heading>
          <Paragraph>
            I'm a SysAdmin working on <Link href='https://laberit.com'>Laberit</Link>.
            Chinese nationality born in Spain and actually living in Spain since I can remenber.
            In my spare time, I study new tecnologies and build some projects like this portfolio.
            You can find me on my <Link href='https://github.com/kaidewu'>Github</Link> and <Link href='https://linkedin.com/kaidewu'>Linkedin</Link>.
          </Paragraph>
        </Section>
      </Center>
    </Layout>
  )
}

export { getServerSideProps } from '../components/chakra'