import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import MyHomeCloudProjectCard from '../components/myhomecloudprojectcard'
import PortfolioProjectCard from '../components/portfolioprojectcard'
import { 
  Box,
  Link,
  Center,
  Heading,
  Container,
  SimpleGrid
} from '@chakra-ui/react'
import Data from '../data/cards.json'

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
            <Link href='https://www.laberit.com'>Laberit</Link>.
            Chinese nationality born in Spain, I live in Spain since I can remenber.
            In my spare time, I study new tecnologies and build some projects like this portfolio.
            You can find me on my {" "}
            <Link href='https://www.github.com/kaidewu'>Github</Link> and {" "}
            <Link href='https://www.linkedin.com/in/kaidewu'>Linkedin</Link>.
          </Paragraph>
        </Section>
      </Center>

      <Section delay={0.2}>
        <Heading size="lg" variant="page-title" marginTop={"7%"}>
          Projects
        </Heading>
        <SimpleGrid columns={1} spacing={4} mt={8} w="100%">
          <MyHomeCloudProjectCard
            title={Data.title}
            description={Data.Description}
            logo={Data.imageURL}
            link={Data.repoURL} 
            About={Data.About}/>
          <PortfolioProjectCard
          title={Data.portfolioTitle}
          Description={Data.portfolioDescription}
          logo={Data.portfolioLogo}
          url={Data.portfolioURL}/>
        </SimpleGrid>
      </Section>
    </Layout>
  )
}

export { getServerSideProps } from '../components/chakra'
