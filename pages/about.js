import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

export default function about() {
  return (
    <Layout title="About">
      <Heading as="h3" fontSize={20} mb={4}>
        About me
      </Heading>
    </Layout>
  )
}
